<template>
  <router-link to="/about">about</router-link>
  <TodoItem /> {{ width }} {{ showWidth }}
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import { userRwdFn } from "../composition-api/index";

export default {
  components: {
    TodoItem,
  },
  setup() {
    window.name = "bb";
    console.log("BB", window.performance.navigation.type);
    const { width, showWidth } = userRwdFn();
    return {
      width,
      showWidth,
    };
  },
};
</script>

<style></style>
