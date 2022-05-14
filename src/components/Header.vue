<template>
  <v-row class="text-center mt-4">
      <v-col cols="6" class="align-center">
        <h1 class="purple--text">ToDoList</h1>
      </v-col>
      <v-col cols="6" class="align-center">
        <p>Tâches réalisées : {{ doneTodos.length }}/{{ todos.length }}</p>
      </v-col>
    </v-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data: () => ({

    }),
    computed: {
      ...mapState(['todos']),
      ...mapGetters(['doneTodos']),
    },
}
</script>