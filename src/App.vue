<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>PlanningPoker</h1>
      <v-btn @click="goHome" v-if="shouldShowBackButton" color="primary" class="ml-5">Home</v-btn>
      <v-spacer></v-spacer>
      <span v-if="boardId" class="d-none d-md-flex">ID: {{ boardId }}</span>
    </v-app-bar>

    <v-content class="ma-3">
      <router-view></router-view>
    </v-content>

    <v-footer>
      <v-spacer></v-spacer>
      <div class="my-3">
        Created with <v-icon color="red" small class="mx-1">mdi-heart</v-icon> by davidalves1
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
