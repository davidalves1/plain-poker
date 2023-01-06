import { onValue, set, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from './usersDatabase';
import * as storage from './storage';
import { getRef } from '@shared/firebase';

export const onValueChange = onValue;

export const getBoardRef = boardId => getRef(boardId);

export const createBoard = async (boardName, userName) => {
  const boardId = uuidv4();
  const userId = uuidv4();

  const user = {
    _id: userId,
    name: userName,
    isAdmin: true,
  };

  const boardRef = getRef(boardId);
  await set(boardRef, {
    _id: boardId,
    name: boardName,
    users: { [userId]: user },
  });

  storage.set('userName', userName);
  storage.set('userId', userId);

  return boardId;
};

export const joinBoard = async (boardId, userName) => {
  // const boardRef = getBoardRef(boardId);
  const boardRef = getRef(boardId);

  let board = {};
  onValue(boardRef, snapshot => {
    board = snapshot.val();
  });

  if (!board?._id || boardId !== board._id) {
    throw new Error('O quadro informado ẽ inválido');
  }

  const savedUserId = storage.get('userId');

  if (savedUserId && board?.users[savedUserId]) {
    return board;
  }

  const userId = await addUser(boardId, { name: userName, isAdmin: false });
  storage.set('userName', userName);
  storage.set('userId', userId);

  return board;
};

export const deleteBoard = async boardId => {
  const boardRef = getRef(`${boardId}`);

  await remove(boardRef);
  storage.remove('userId');
};

export const deleteUser = async (boardId, userId) => {
  console.log('🚀 ~ deleteUser', { boardId, userId });
};
