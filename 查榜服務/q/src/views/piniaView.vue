<template>
  <h1>計數器</h1>
  <countBtn/>
  <p>---------------------------------------------------------------------------------------</p>
  <h2>保持菠蘿狀態的 3 種方法</h2>
  <p>---------------------------------------------------------------------------------------</p>
  <countInput/>
</template>

<script>
import countBtn from "../components/pinia/countBtn.vue"
import countInput from "../components/pinia/countInput.vue"
export default {
  components: {
    countBtn,
    countInput
  },
  setup(){
    
    return{
    }
  }
}
</script>

<style>

</style>