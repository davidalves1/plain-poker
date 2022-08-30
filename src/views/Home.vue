<template>
  <v-main>
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
  </v-main>
</template>

<script>
import * as storage from '../services/storage';
import { createBoard } from '../services/boardsDatabase';

export default {
  name: 'Home',
  data() {
    return {
      board: null,
    };
  },
  created() {
    storage.set('isAdmin', false);
    storage.remove('boardId');
  },
  methods: {
    async newBoard() {
      // this.$store.commit('setBoard', { id: boardId, isAdmin: true });
      try {
        // TODO: move this logic to New Board view
        const boardId = await createBoard('Batatas');
        console.log('🚀 ~ newBoard ~ result', boardId);

        this.$router.push({ name: 'Board', params: { boardId } });
      } catch (err) {
        console.log('🚀 ~ newBoard ~ err', err);
      }
    },
    joinBoard() {
      this.$router.push({ name: 'JoinBoard' });
    },
  },
};
</script>
