<template>
  <div>Lodash: _.assign {{ aa }}</div>
</template>

<script>
import _ from "lodash";
export default {
  name: "lodashPage",
  setup() {
    var objA = { name: "colin", car: "suzuki" };
    var objB = { name: "james", age: 17 };
    var objC = { pet: "dog" };

    // Lodash
    const aa = _.assign(objA, objB, objC);
    // {"name": "james", "car": "suzuki", "age": 17, "pet": "dog"}

    var data = [
      {
        medicine: 1234,
        info: "blabla",
      },
      {
        medicine: 9585,
        info: "blabla",
      },
    ];

    const dataMedicines = _.map(data, "medicine");

    console.log("dataMedicines", dataMedicines);

    return { aa };
  },
};
</script>

<style></style>
