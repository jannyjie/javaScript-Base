<template>
  <div>Javascript : {{ aa }}</div>
  <div>Lodash: _.sample {{ bb }}</div>
  <p>此外，你也可以指定隨機返回元素的個數。 {{ cc }}</p>
</template>

<script>
import _ from "lodash";
export default {
  name: "lodashPage",
  setup() {
    var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

    function pickRandomPerson(luckyDraw) {
      var index = Math.floor(Math.random() * (luckyDraw.length - 1));
      return luckyDraw[index];
    }

    const aa = pickRandomPerson(luckyDraw); // John

    // Lodash
    const bb = _.sample(luckyDraw); // Colin`

    // Lodash - Getting 2 random item
    const cc = _.sample(luckyDraw, 2); // ['John','Lily']
    return { aa, bb, cc };
  },
};
</script>

<style></style>
