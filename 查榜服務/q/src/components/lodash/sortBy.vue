<template>
  <div>Lodash: _.sortBy</div>
  <p>-------------原始資料--------------</p>
  <div>{{ users }}</div>
  <p>----------------------------</p>
  <div>{{ bb }}</div>
  <p></p>
  <div>{{ cc }}</div>
  <p></p>
  <div>{{ dd }}</div>
</template>

<script>
import _ from "lodash";
export default {
  name: "lodashPage",
  setup() {
    // Lodash
    // console.log("dataMedicines", dataMedicines);

    var users = [
      { user: "fred", age: 48 },
      { user: "barney", age: 36 },
      { user: "fred", age: 40 },
      { user: "barney", age: 34 },
    ];

    const bb = _.sortBy(users, function (o) {
      return o.user;
    });
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

    const cc = _.sortBy(users, ["user", "age"]);
    // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

    const dd = _.sortBy(users, "user", function (o) {
      return Math.floor(o.age / 10);
    });
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

    return { bb, cc, dd, users };
  },
};
</script>

<style></style>
