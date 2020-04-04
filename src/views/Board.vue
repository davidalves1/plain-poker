<template>
  <v-container>
    <v-row>
      <span v-if="boardId" class="d-flex d-md-none">ID: {{ boardId }}</span>
    </v-row>
    <v-row>
      <v-col>
        <h1>BOARD</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Board',
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
