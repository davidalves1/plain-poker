import { set, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { getRef } from '../firebase';

export const addUser = async (boardId, user) => {
  const userId = uuidv4();
  const userRef = getRef(`${boardId}/users/${userId}`);

  await set(userRef, { ...user, _id: userId });

  return userId;
};

export const deleteUser = (boardId, userId) => {
  const userRef = getRef(`${boardId}/users/${userId}`);

  return remove(userRef);
};
