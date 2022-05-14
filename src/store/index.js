import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        todoName: "Todo1",
        done: true,
      },
      {
        id: 2,
        todoName: "Todo2",
        done: false,
      },
      {
        id: 3,
        todoName: "Todo3",
        done: false,
      },
    ],
  },
  getters: {
    // return filtered todolist for todo = done
    doneTodos (state) {
      return state.todos.filter(todo => todo.done);
    },
    // return filtered todolist for todo = to be done
    todoToBeDone (state) {
      return state.todos.filter(todo => !todo.done);
    },
  },
  mutations: {
    // filter received todo id, filter to isolate it, change status
    CHANGE_TO_STATUS (state, payload) {
      const currentTodo = state.todos.find(todo => todo.id === payload);

      // toggle to true or false depending on current "done status"
      currentTodo.done = !currentTodo.done;
    },
    DELETE_TODO (state, payload) {
      const currentTodo = state.todos.find(todo => todo.id === payload);

      // remove the wanted todo from todos array
      state.todos = state.todos.filter(todo => todo !== currentTodo)
    },
    ADD_TODO (state, payload) {
      const idToPass = state.todos.length + 1;
      const newTodo = { id: idToPass, todoName: payload, done: false };
      state.todos.push(newTodo);
    },
  },
  actions: {
    changeTodoStatus (context, payload) {
      context.commit('CHANGE_TO_STATUS', payload);
    },
    deleteTodo (context, payload) {
      context.commit('DELETE_TODO', payload);
    },
    addTodo (context, payload) {
      context.commit('ADD_TODO', payload);
    },
  },
});
