<template>
  <v-content>
    <v-row>
      <v-col md="3" offset-md="3">
        <v-btn color="primary" large block @click="newBoard">
          <span class="mr-3">Criar um quadro novo</span>
          <v-icon>mdi-plus-box</v-icon>
        </v-btn>
      </v-col>
      <v-col md="3">
        <v-btn color="primary" large block @click="joinBoard">
          <span class="mr-3">Entrar em um quadro existente</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import * as storage from '../services/storage';

export default {
  name: 'Home',
  created() {
    storage.set('isAdmin', false);
    storage.remove('boardId');
  },
  methods: {
    newBoard() {
      const boardId = uuidv4();
      this.$store.commit('setBoard', { id: boardId, isAdmin: true });
      this.$router.push({ name: 'Board', params: { boardId } });
    },
    joinBoard() {
      this.$router.push({ name: 'JoinBoard' });
    },
  },
};
</script>
