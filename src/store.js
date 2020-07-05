/* eslint-disable no-console */
import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';

function createStore({ state, mutations }) {
  return {
    state: Vue.observable(state),
    commit(key, ...args) {
      mutations[key](state, ...args);
    },
  };
}

const store = createStore({
  state: {
    board: {
      id: '',
      isAdmin: false,
      tasks: [],
    },
  },
  mutations: {
    setBoard(state, { id, isAdmin }) {
      Object.assign(state.board, { id, isAdmin });
      console.log({ ...state });
    },
    addTask(state, { title, description }) {
      const { tasks } = state.board;
      tasks.push({
        title,
        description,
        id: uuidv4(),
        totalPoints: 0,
      });
    },
  },
});

export default store;
