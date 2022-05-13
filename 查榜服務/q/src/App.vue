<!-- App.vue -->
<template>
  <router-view v-if="isRouterAlive"></router-view>
  <!-- 在router-view使用isRouterAlive或者是下面这种在组件中使用 -->
  <!-- <BLank v-if="isRouterAlive"></BLank> -->
</template>

<script>
import { ref, nextTick, provide } from "vue";
// import BLank from "@/components/BLank.vue";
export default {
  name: "App",
  components: {
    // BLank,
  },
  setup() {
    // 局部组件刷新
    const isRouterAlive = ref(true);
    const reload = () => {
      console.log(isRouterAlive.value);
      isRouterAlive.value = false;
      console.log(2);
      nextTick(() => {
        // console.log(1);
        isRouterAlive.value = true;
        // location.reload();
        // console.log(isRouterAlive.value);
      });
    };
    provide("reload", reload);

    return {
      isRouterAlive,
    };
  },
};
</script>
