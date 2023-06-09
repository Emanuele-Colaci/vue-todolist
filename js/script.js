const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                { 
                    text: "Fare la spesa", 
                    done: false 
                },
                { 
                    text: "Pulire la casa", 
                    done: true 
                },
                {
                    text: "Studiare per l'esame", 
                    done: false 
                },
                { 
                    text: "Fare esercizio fisico", 
                    done: false 
                },
                { 
                    text: "Preparare la cena", 
                    done: true },
                { 
                    text: "Leggere un libro", 
                    done: false 
                },
                { 
                    text: "Chiamare un amico", 
                    done: true 
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
                done: false 
            }
            this.tasks.push(obj);

            this.newTask = '';
        }
    },
}).mount('#app');
   