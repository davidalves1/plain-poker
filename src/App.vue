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
        By <a class="footer__link" href="https://davidalves1.com" target="_blank">@davidalves1</a>
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
    shouldShowBackButton() {
      return this.$route.path.includes('board');
    },
  },
  methods: {
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
