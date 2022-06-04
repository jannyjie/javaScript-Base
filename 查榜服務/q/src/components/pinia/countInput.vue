<template>
  <h1>Name is {{store.user.name}}</h1>
  <h2>Email is {{store.user.email}}</h2>
  <h1>Website is {{store.user.website}}</h1>
  <input type="text" v-model="nameInput">
  <button @click="handSubmit">handSubmit</button>
  <button @click="store.count++">count: {{store.count}}</button>
</template>

<script>
import {useUserStore} from "@/store/user"
import {ref} from 'vue'
export default {
  setup(){
    const store = useUserStore()
    const nameInput = ref("")

    const handSubmit = () => {
      store.changeName(nameInput.value);
      nameInput.value = "";
    }
    return{
      store,
      nameInput,
      handSubmit
    }
  }
}
</script>

<style>

</style>