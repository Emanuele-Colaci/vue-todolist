const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                { 
                    text: "Fare la spesa", 
                    done: false,
                    edit_enabled: ''
                },
                { 
                    text: "Pulire la casa", 
                    done: true,
                    edit_enabled: ''
                },
                {
                    text: "Studiare per l'esame", 
                    done: false,
                    edit_enabled: '' 
                },
                { 
                    text: "Fare esercizio fisico", 
                    done: false,
                    edit_enabled: '' 
                },
                { 
                    text: "Preparare la cena", 
                    done: true,
                    edit_enabled: ''
                },
                { 
                    text: "Leggere un libro", 
                    done: false, 
                    edit_enabled: ''
                },
                { 
                    text: "Chiamare un amico", 
                    done: true,
                    edit_enabled: ''
                }
            ]
        }
    },
    methods:{
        status(index){
            this.tasks[index].done = !this.tasks[index].done;
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        addTask(){
            let obj = {
                text: this.newTask, 
                done: false,
                edit_enabled: ''
            }
            this.tasks.push(obj);

            this.newTask = '';
        },
        edit_task(index){
            this.tasks[index].edit_enabled = !this.tasks[index].edit_enabled;
        }
    },
}).mount('#app');
   