import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new-board',
    name: 'NewBoard',
    component: () => import(/* webpackChunkName: "NewBoard" */ '../views/NewBoard.vue'),
  },
  {
    path: '/board',
    name: 'JoinBoard',
    component: () => import(/* webpackChunkName: "JoinBoard" */ '../views/JoinBoard.vue'),
  },
  {
    path: '/board/:boardId',
    name: 'Board',
    component: () => import(/* webpackChunkName: "Board" */ '../views/Board.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
