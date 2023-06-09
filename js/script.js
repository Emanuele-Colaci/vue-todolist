const { createApp } = Vue;

createApp({
    data(){
        return{
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
        
    },
}).mount('#app');
   