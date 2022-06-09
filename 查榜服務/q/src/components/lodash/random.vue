<template>
  <div>Javascript : {{ aa }}</div>
  <div>Lodash: _.random {{ bb }}</div>
</template>

<script>
import _ from "lodash";
export default {
  name: "lodashPage",
  setup() {
    // Get a random number between 15 and 20.
    // Naive utility method
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const aa = getRandomNumber(15, 20);

    // Lodash
    const bb = _.random(15, 20);
    return { aa, bb };
  },
};
</script>

<style></style>
