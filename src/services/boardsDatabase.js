import {
  ref, onValue, set,
} from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../firebase';

export const onValueChange = onValue;

export const getBoardRef = (boardId) => ref(database, `boards/${boardId}`);

export const createBoard = async (boardName) => {
  const boardId = uuidv4();
  // const { key } = push(ref(database, 'boards'), { name: 'Francislene', age: 28, foods: {} });
  const boardRef = getBoardRef(boardId);
  set(boardRef, { name: boardName });

  return boardId;
};
