<!-- App.vue -->
<template>
  <div id="app" class="app-containt">
    <NavBar />
    <!-- <router-view v-if="isRouterAlive"></router-view> -->
    <router-view class="router-containt" v-if="isRouterAlive"></router-view>
  </div>

  <!-- 在router-view使用isRouterAlive或者是下面这种在组件中使用 -->
  <!-- <BLank v-if="isRouterAlive"></BLank> -->
</template>

<script>
import { ref, nextTick, provide } from "vue";
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
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
<style lang="scss">
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "~bootstrap";
</style>
