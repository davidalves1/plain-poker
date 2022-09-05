<template>
  <v-container>
    <v-row>
      <v-col md="4" offset-md="4">
        <h2 class="text-center">Entrar em um quadro</h2>
        <v-form v-model="valid">
          <v-text-field v-model="boardId" label="ID do quadro" :rules="boardIdRules" required />
          <v-text-field
            v-model="userName"
            label="Seu nome"
            :rules="userNameRules"
            required />
          <v-btn
            @click="goBoard"
            class="mt-2"
            color="primary"
            block
            large
            :disabled="disableRegisterButton">
            <span class="mr-1">Entrar</span>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as storage from '../services/storage';
import { joinBoard } from '../services/boardsDatabase';

export default {
  name: 'JoinBoard',
  data() {
    return {
      boardId: '',
      boardIdRules: [
        (v) => (!!v && v.length === 36) || 'É preciso informar um ID válido',
      ],
      userName: storage.get('userName') || '',
      userNameRules: [
        (v) => (!!v && v.length > 0) || 'É preciso informar um nome para prosseguir.',
      ],
      valid: true,
    };
  },
  computed: {
    disableRegisterButton() {
      return !this.valid;
    },
  },
  methods: {
    async goBoard() {
      try {
        await joinBoard(this.boardId, this.userName);

        this.$router.push({
          name: 'Board',
          params: { boardId: this.boardId },
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('🚀 ~ joinBoard ~ err', err);
      }
    },
  },
};
</script>
