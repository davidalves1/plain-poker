<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>PlanningPoker</h1>
      <v-spacer></v-spacer>
      <span>ID: {{ boardId }}</span>
    </v-app-bar>

    <v-content>
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

export default {
  name: 'App',
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
  },
};
</script>
