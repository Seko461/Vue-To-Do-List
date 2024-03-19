
const { createApp } = Vue
let id = 0;
createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
            hideCompleted: false,


        }
    },
    methods: {
        addTodo() {
            this.todos.push({ id: id++, text: this.newTodo, done: false })
            this.newTodo = ''
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
        },

    },
    computed: {
        filteredTodos() {
            return this.hideCompleted
                ? this.todos.filter((t) => !t.done)
                : this.todos
        }
    }
}).mount('#app')