<template>
  <v-container>
    <v-row>
      <v-col md="4" offset-md="4">
        <h2 class="text-center">Entrar em um quadro</h2>
        <v-form v-model="valid">
          <v-text-field v-model="boardId" label="ID do quadro" :rules="boardIdRules" required />
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

export default {
  name: 'JoinBoard',
  data() {
    return {
      boardId: '',
      boardIdRules: [
        (v) => (!!v && v.length === 36) || 'É preciso informar um ID válido',
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
    goBoard() {
      storage.set('isAdmin', false);
      storage.set('boardId', this.boardId);

      this.$router.push({ name: 'Board', params: { boardId: this.boardId } });
    },
  },
};
</script>
