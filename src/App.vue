<template>
  <div id="app">
    <h1>
      Todos
    </h1>
    <h2>Completed: {{computedTodo}}</h2>
    <h3>Pending: {{pendingTodo}} </h3>
<todos-list>
</todos-list>
    <todo-form/>
  </div>
</template>

<script>
import TodosList from './components/TodosList.vue';
import TodoForm from './components/TodoForm.vue';

export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm,
  },
  computed:{
    computedTodo(){
      return this.$store.getters.completedTodo;
    },
    pendingTodo(){
      return this.$store.getters.pendingTodo;
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
