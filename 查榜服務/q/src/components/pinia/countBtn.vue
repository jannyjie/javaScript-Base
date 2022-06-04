<template>
  <h1>Count is {{store.counter}}</h1> 
  <h2>Double is {{store.doubleCount}}</h2>
  <button @click="store.increment(2)">Increment</button>
  <button @click="store.waitAndAdd">Wait + Increment</button> 
</template>

<script>
import {useStore} from "@/store/counter"
export default {
  setup(){
    const store = useStore()
    return{
      store,
    }
  }
}
</script>

<style>

</style>