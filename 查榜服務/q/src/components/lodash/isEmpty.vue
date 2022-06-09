<template>
  <div>Lodash:isEmpty : {{ plusOne }}</div>
  <p>如果為空則為 false</p>
  <a
    href="https://github.com/lodash/lodash/issues/496"
    target="_blank"
    rel="noopener noreferrer"
    >github 討論</a
  >
</template>

<script>
import _ from "lodash";
import { ref, computed } from "vue";
export default {
  name: "lodashPage",
  setup() {
    const aa = ref("");

    const plusOne = computed(() => {
      return !_.isEmpty(aa.value);
    });
    return { aa, plusOne };
  },
};
</script>

<style></style>
