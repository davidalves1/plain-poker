<template>
  <v-container>
    <v-row>
      <span v-if="boardId" class="d-flex d-md-none">ID: {{ boardId }}</span>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <h2>Tarefas</h2>
            <p v-if="!hasTasks" class="text-center">Não existem tarefas cadastradas</p>
            <v-simple-table v-else>
              <template v-slot:default>
                <thead class="list__header">
                  <th>#</th>
                  <th>Título</th>
                  <th>Descrição</th>
                  <th>Pontuação</th>
                </thead>
                <tbody>
                  <tr v-for="(task, index) in tasks" :key="task.id" :class="getRowClass(index)">
                    <td>{{  index + 1 }}</td>
                    <td>{{ task.title }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ task.totalPoints }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="12">
            <h2>Nova tarefa</h2>
            <v-text-field label="Título" v-model="title"></v-text-field>
            <v-textarea label="Descrição" v-model="description"></v-textarea>
            <v-btn block large color="primary" @click="addNewTask">
              <span class="mr-3">Adicionar</span>
              <v-icon>mdi-plus-box</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col offset-md="1" md="3">
        <h2>Usuários conectados</h2>
        <code>{{ board }}</code>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getBoardRef, onValueChange } from '../services/boardsDatabase';

export default {
  name: 'Board',
  data() {
    return {
      title: '',
      description: '',
      board: {},
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    tasks() {
      return this.$store.state.board.tasks;
    },
    hasTasks() {
      return this.tasks.length > 0;
    },
  },
  mounted() {
    this.startBoard(this.boardId, this.board);
  },
  methods: {
    addNewTask() {
      this.$store.commit('addTask', {
        title: this.title,
        description: this.description,
      });

      this.$toasted.success('Tarefa adicionada com sucesso!');
      this.clearForm();
    },
    clearForm() {
      this.title = '';
      this.description = '';
    },
    getRowClass(index) {
      return index % 2 !== 0 ? 'list__item' : '';
    },
    startBoard(boardId) {
      const boardRef = getBoardRef(boardId);

      onValueChange(boardRef, (snapshot) => {
        const value = snapshot.val();
        console.log('🚀 ~ onValueChange ~ value', value);
        this.board = value;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list__header {
  background: #9e9e9e;
}

.list__item {
  background: #F5F5F5;
}
</style>
