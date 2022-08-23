<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>PlanningPoker</h1>
      <v-btn @click="goHome" v-if="shouldShowBackButton" color="primary" class="ml-5">Home</v-btn>
      <v-spacer></v-spacer>
      <span v-if="boardId" class="d-none d-md-flex">ID: {{ boardId }}</span>
    </v-app-bar>

    <v-main class="ma-3">
      <router-view></router-view>
    </v-main>

    <v-footer>
      <v-spacer></v-spacer>
      <div class="my-3">
        By <a class="footer__link" href="https://davidalves1.com" target="_blank">@davidalves1</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client';
import * as storage from './services/storage';

export default {
  name: 'App',
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    shouldShowBackButton() {
      return this.$route.path.includes('board');
    },
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      const userId = uuidv4();
      storage.add('userId', userId);
      storage.add('name', userId.substr(0, 8));

      const socket = io('http://localhost:5000');
      socket.on('board', (boardId) => {
        // eslint-disable-next-line no-console
        console.log({ boardId });
      });
    },
    goHome() {
      this.$router.replace({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss" scoped>
  .footer__link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>
