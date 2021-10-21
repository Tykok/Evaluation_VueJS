// Script Vue.JS
const app = Vue.createApp({
    computed: {
        id: 0,
        description: '',
        task: []
    },
    methods: {
        returnTodoList() {
            // On instancie un array par défaut si on ne trouve pas de liste
            if (this.getLocalTodoList() == null)
                localStorage.setItem('listTodo', JSON.stringify([
                    { id: 1634799994263, text: "Une nouvelle tâche" },
                    { id: 1634799994264, text: "Une autre tâche" }
                ]
                ))

            this.task = this.getLocalTodoList()
            
            // On retourne notre liste
            return this.task
        },

        getLocalTodoList() {
            return JSON.parse(localStorage.getItem('listTodo'))
        },

        addTacheToTodoList() {
            let newTodoList = this.returnTodoList()
            console.log(this.description)
            newTodoList.push(this.newTache(this.description))

            localStorage.setItem('listTodo',
                JSON.stringify(
                    newTodoList
                )
            )
            this.task = newTodoList
            return newTodoList
        },

        newTache(desc) {
            return { id: Date.now(), text: desc }
        }
    }
}).mount("#app")