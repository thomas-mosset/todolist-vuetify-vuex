<template>
    <v-col cols="12" sm="12" md="4">
        
        <v-row>
          <p min-width="90%" class="mx-auto mt-16">Tâches terminées :</p>
        </v-row>

        <v-row>
            <v-card v-if="doneTodos.length < 1" elevation="4" shaped min-width="90%" class="ma-auto">
              <v-list-item class="my-4">
                  <v-list-item-title>
                   0 tâche terminée !
                  </v-list-item-title>
              </v-list-item>
            </v-card>

            <v-card v-else elevation="4" shaped min-width="90%" class="ma-auto">
              <v-list-item v-for="todo in doneTodos" :key="todo.id" class="my-4">
                  <v-list-item-title>
                    {{ todo.todoName }}
                  </v-list-item-title>
                  <v-btn @click="changeTodoStatus(todo.id)" color="grey darken-1" class="mx-2  white--text">
                    A faire
                    <v-icon
                      small
                      color="white"
                      class="ml-1"
                    >
                      mdi-arrow-left-top-bold
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
    name: 'DoneTodos',
    computed: {
      ...mapGetters(['doneTodos']),
    },
    methods: {
      ...mapActions(['changeTodoStatus', 'deleteTodo']),
    }
}
</script>