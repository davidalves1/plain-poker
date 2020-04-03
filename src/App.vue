<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>PlaningPoker</h1>
    </v-app-bar>

    <v-content>
      <v-row class="justify-center">
        <v-col size="12">
          <v-text-field />
          <v-btn color="primary" large>
            <span>Criar um quadro novo</span>
            <v-icon class="">mdi-plus-box</v-icon>
          </v-btn>
        </v-col>
        <v-col size="12">
          <v-btn color="primary" large>
            <span class="mr-2">Entrar em um quadro existente</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
