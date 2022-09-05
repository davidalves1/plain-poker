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

export default {
  name: 'Home',
  data() {
    return {
      board: null,
    };
  },
  methods: {
    async newBoard() {
      this.$router.push({ name: 'NewBoard' });
    },
    joinBoard() {
      this.$router.push({ name: 'JoinBoard' });
    },
  },
};
</script>
