<template>
    <v-col cols="12" sm="12" md="8">
        <v-row>
          <p min-width="90%" class="mx-auto mt-16">Tâches à réaliser :</p>
        </v-row>

        <v-row>

          <v-card v-if="todoToBeDone.length < 1" elevation="4" shaped min-width="90%" class="ma-auto">
            <v-list-item class="my-4">
              <v-list-item-title>
                Plus de tâche à faire !
              </v-list-item-title>
            </v-list-item>
          </v-card>

          <v-card elevation="4" shaped min-width="90%" class="ma-auto">
            <v-list-item v-for="todo in todoToBeDone" :key="todo.id" class="my-4">
                <v-list-item-title>
                  {{ todo.todoName }}
                </v-list-item-title>
                <v-btn @click="changeTodoStatus(todo.id)" color="purple" class="mx-2 white--text">
                  Fait
                  <v-icon
                    small
                    color="white"
                    class="ml-1"
                  >
                    mdi-check
                  </v-icon>
                </v-btn>
                <v-btn @click="deleteTodo(todo.id)" color="grey darken-4" class="mx-2 white--text">
                  Supp
                  <v-icon
                    small
                    color="white"
                    class="ml-1"
                  >
                    mdi-delete
                  </v-icon>
                </v-btn>
            </v-list-item>
          </v-card>
          
        </v-row>
    </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'ListToDo',
    computed: {
      ...mapGetters(['todoToBeDone']),
    },
    methods: {
      ...mapActions(['changeTodoStatus', 'deleteTodo']),
    },
};
</script>