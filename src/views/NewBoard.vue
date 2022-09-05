<template>
  <v-container>
    <v-row>
      <v-col md="4" offset-md="4">
        <h2 class="text-center">Criar um quadro novo</h2>
        <v-form v-model="valid">
          <v-text-field
            v-model="boardName"
            label="Nome do quadro"
            :rules="boardNameRules"
            required />
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
            :disabled="disableCreateButton">
            <span class="mr-1">Criar</span>
            <v-icon>mdi-folder-plus</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createBoard } from '../services/boardsDatabase';
import { get as getStorage } from '../services/storage';

export default {
  name: 'NewBoard',
  data() {
    return {
      boardName: '',
      boardNameRules: [
        (v) => (!!v && v.length > 5) || 'O nome do quadro precisa ter mais do que 5 caracteres.',
      ],
      userName: getStorage('userName') || '',
      userNameRules: [
        (v) => (!!v && v.length > 0) || 'É preciso informar um nome para prosseguir.',
      ],
      valid: true,
    };
  },
  computed: {
    disableCreateButton() {
      return !this.valid;
    },
  },
  methods: {
    async goBoard() {
      try {
        // TODO: move this logic to New Board view
        const boardId = await createBoard(this.boardName, this.userName);

        this.$router.push({ name: 'Board', params: { boardId } });
      } catch (err) {
        console.log('🚀 ~ newBoard ~ err', err);
      }
    },
  },
};
</script>
