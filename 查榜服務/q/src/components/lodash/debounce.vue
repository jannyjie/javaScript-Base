<template>
  <a
    href="https://www.lodashjs.com/docs/lodash.debounce"
    target="_blank"
    rel="noopener noreferrer"
    >debounce</a
  >
  <button @click="btnClick">节流</button>
  <p>_.throttle</p>
  <a
    href="https://www.lodashjs.com/docs/lodash.throttle"
    target="_blank"
    rel="noopener noreferrer"
    >throttle</a
  >
  <button @click="btnClick2">防抖</button>
</template>

<script>
import _ from "lodash";
// import { ref, onMounted } from "vue";
export default {
  name: "lodashPage",
  setup() {
    const ss = "a-b-n-d";
    const aa = _.split(ss, "-");
    console.log(aa);

    // 节流
    const btnClick = _.debounce(function () {
      // ....
      console.log("节流");
    }, 2000);
    // 防抖
    const btnClick2 = _.throttle(function () {
      // ....
      console.log("防抖");
    }, 2000);
    return {
      btnClick,
      btnClick2,
    };
  },
};
</script>

<style></style>
