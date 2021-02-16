<template>
  <div>
    <h2>ToDo App</h2>
    <a href="/">Home</a>
    <hr>
    <select v-model="filter">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">unDone</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos='filteredTodos'
        @remove-todo = "removeTodo"
    />
    <p v-else>No todos</p>
    <AddTodo
        @add-todo = "addTodo"
    />
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data(){
    return {
      todos:[
        // {id: 1, title: 'Купить хлеб', complite: false},
        // {id: 2, title: 'Купить колбасу', complite: false},
        // {id: 3, title: 'Купить молоко', complite: false},
      ],
      loading: true,
      filter: 'all',
    }

  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
            setTimeout(()=>{
                this.todos = json
                this.loading = false
            },1000)//Для просмотра лоадера
            
        })
  },
//   watch:{
//       filter(value){
//           console.log(value)
//       }
//   },
    computed:{
        filteredTodos(){
            console.log(this.todos)
            if (this.filter === 'all') {
                return this.todos
            }
            if (this.filter === 'done') {
                return this.todos.filter(t => t.completed)
            }
            if (this.filter === 'undone') {
                return this.todos.filter(t => !t.completed)
            }

        }
    },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  methods:{
        removeTodo(id){
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodo(todo){
          this.todos.push(todo)
          //console.log('app submit')
        }
    }
}
</script>

