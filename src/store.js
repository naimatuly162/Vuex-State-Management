import  Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        todos:[
            {
                title: "learn to Build Dynamic Component",
                completed: false
            },
            {
                title: "vuex state management",
                completed: false
            },
        ]

    },
    getters:{
        completedTodo(state){
            return state.todos.filter(todo=>{
                return todo.completed === true;
            }).length;
        },
        pendingTodo(state){
            return state.todos.filter(todo=>{
                return todo.completed === false;
            }).length;
        }

    },

    mutations:{
    NEW_TODO(state,todoItem){
    state.todos.push({
        title:todoItem,
        completed: false
    });
    },
        DELETE_ITEM(state,todoItem){
        let index = state.todos.indexOf(todoItem);
        state.todos.splice(index,1);
        },
        TOGGLE_ITEM(state,todoItem){
        todoItem.completed= !todoItem.completed;
        },

    },
    actions:{
        addNewTodo({commit},todoItem){
            commit ('NEW_TODO',todoItem);
},
        deleteTodo({commit},todoItem){
            commit('DELETE_ITEM',todoItem);
        },
        toggleTodoStatus({commit},todoItem){
            commit('TOGGLE_ITEM',todoItem);
        }
    }
});