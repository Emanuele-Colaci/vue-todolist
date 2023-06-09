const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                { 
                    text: "Fare la spesa", 
                    done: false,
                    edit_enabled: false
                },
                { 
                    text: "Pulire la casa", 
                    done: true,
                    edit_enabled: false
                },
                {
                    text: "Studiare per l'esame", 
                    done: false,
                    edit_enabled: false 
                },
                { 
                    text: "Fare esercizio fisico", 
                    done: false,
                    edit_enabled: false 
                },
                { 
                    text: "Preparare la cena", 
                    done: true,
                    edit_enabled: false
                },
                { 
                    text: "Leggere un libro", 
                    done: false, 
                    edit_enabled: false
                },
                { 
                    text: "Chiamare un amico", 
                    done: true,
                    edit_enabled: false
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
            }
            this.tasks.push(obj);

            this.newTask = '';
        },
        edit_task(index){
            this.tasks[index].edit_enabled = !this.tasks[index].edit_enabled;
        }
    },
}).mount('#app');
   