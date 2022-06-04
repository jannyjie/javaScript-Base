import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment(val =1 ) {
            this.counter += val;
        },
        async waitAndAdd(){
            setTimeout(() => {
                this.counter++;
            }, 2000)
        },
        // randomizeCounter() {
        //     this.counter = Math.round(100 * Math.random())
        // },
    },
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
})