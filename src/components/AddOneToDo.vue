<template>
  <v-form
    @submit.prevent="addTodo(todoTitle)"
    ref="form"
    lazy-validation
    v-model="canSubmit"
    min-width="90%" 
    class="mx-auto mt-4 px-6"
  >
      <v-row>
        <v-col
          cols="9"
          sm="10"
          md="10"
        >
          <v-text-field
            v-model="todoTitle"
            label="Tâche à faire"
            :rules="todoRules"
            color="purple"
            required
          ></v-text-field>
        </v-col>
        <v-col 
          cols="3"
          sm="2"
          md="2"
        >
          <v-btn
            color="purple"
            class="white--text"
            elevation="4"
            raised
            type="submit"
            @click="validate"
            :disabled="!canSubmit"
          >
            Ajouter
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'AddOneToDo',
    data: () => ({
      todoTitle: "",
      canSubmit: true,
      todoRules: [
        validation => !!validation || 'Veuillez renseigner le champs',
        validation => (validation && validation.length >= 3) || 'La ToDo doit contenir au moins 3 caractères',
        validation => (validation && validation.length <= 30) || 'La ToDo ne doit pas faire plus de 30 caractères'
      ],
    }),
    methods: {
      ...mapActions(['addTodo']),
      validate () {
        this.$refs.form.validate();
      },
    },
}
</script>