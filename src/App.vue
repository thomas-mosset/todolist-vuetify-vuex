<template>
  <v-app>
    <v-container>
      <v-main>
        <Header />
        <AddOneToDo />
        <v-row>
          <ListToDo />
          <DoneTodos />
        </v-row>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import AddOneToDo from './components/AddOneToDo.vue';
import ListToDo from './components/ListToDo.vue';
import DoneTodos from './components/DoneTodos.vue';

export default {
  name: 'App',

  components: {
    Header,
    AddOneToDo,
    ListToDo,
    DoneTodos,
  },

  data: () => ({
    //
  }),
};
</script>
