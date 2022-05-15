<!-- test.vue -->
<template>
  <div>
    <!-- input框输入值，点击按钮，看值会不会清空 -->
    <!-- <input type="text">  -->
  </div>
  <button @click="getGoodsList">测试按钮</button>
  {{user.loginType}}
</template>
<script>
import { inject, onMounted} from "vue";

import { useFetchApi } from '../composition-api/useFetch'
export default{
  setup() {
    const button = inject("reload");
    onMounted(() => {
      // window.addEventListener('load', button)
      window.addEventListener('readystatechange', button)
    })

    const {user} =  useFetchApi()
    const getGoodsList =  () => {
      useFetchApi();
    }

    console.log('user', user.value);
    
    return {button, user, getGoodsList};
  },
};
</script>
