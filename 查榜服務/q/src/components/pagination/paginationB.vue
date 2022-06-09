<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        @click="go_one"
        :class="{ disabled: page_num == 1 }"
      >
        <a class="page-link" href="#">|&lt;</a>
      </li>
      <li class="page-item" :class="{ disabled: page_num == 1 }" @click="go_up">
        <a class="page-link" href="#">Prev</a>
      </li>
      <li
        class="page-item"
        v-for="(item, index) in plusOne"
        :key="index"
        @click="go_page(item)"
        :class="{ active: item == page_num }"
      >
        <a class="page-link" href="#"> {{ item }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: page_num == total }"
        @click="next"
      >
        <a class="page-link" href="#">Next</a>
      </li>
      <li
        class="page-item"
        @click="go_end"
        :class="{ disabled: page_num == total }"
      >
        <a class="page-link" href="#">&gt;|</a>
      </li>
    </ul>
    <input type="text" v-model="pageInput" />
    <button @click="pageInputBtn(pageInput)">跳轉</button>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const page_num = ref("1");
    const total = ref("16"); // 總數
    // const num = ref("10"); // 分頁數量
    const pageInput = ref(); // input

    const start = Number(page_num.value);
    console.log("start", typeof start);
    // const end = Number(total.value);

    function pageInputBtn(pages) {
      page_num.value = pages;
    }
    function go_page(pages) {
      page_num.value = pages;
    }
    function go_up() {
      if (Number(page_num.value) <= 1) {
        page_num.value = 1;
        console.log("es");
      } else {
        console.log("rt");
        page_num.value = page_num.value - 1;
      }
    }
    function go_one() {
      page_num.value = 1;
    }
    function go_end() {
      page_num.value = total.value;
    }
    function next() {
      if (Number(page_num.value) >= Number(total.value)) {
        page_num.value = Number(total.value);
      } else {
        page_num.value = Number(page_num.value) + 1;
      }
    }

    const plusOne = computed(() => {
      const initial = []; // 運算
      const result = []; // 運算
      for (let i = 0; i < total.value; i++) {
        initial.push(i + 1);
      }
      console.log(initial);
      if (Number(page_num.value) - 4 <= 0) {
        console.log(initial.slice(0, 10));

        result.push(
          ...initial.slice(
            0,
            Number(page_num.value) + (10 - Number(page_num.value))
          )
        );
        console.log("result", initial);
      } else if (
        Number(page_num.value) - 4 >= 0 &&
        Number(page_num.value) + 5 <= Number(total.value)
      ) {
        console.log(2);
        console.log(
          initial.slice(Number(page_num.value) - 5, Number(page_num.value) + 5)
        );
        result.push(
          ...initial.slice(
            Number(page_num.value) - 5,
            Number(page_num.value) + 5
          )
        );
      } else {
        console.log(3);
        console.log(
          initial.slice(
            Number(page_num.value) -
              (10 - (Number(total.value) - Number(page_num.value))),
            Number(total.value)
          )
        );
        result.push(
          ...initial.slice(
            Number(page_num.value) -
              (10 - (Number(total.value) - Number(page_num.value))),
            Number(total.value)
          )
        );
      }

      return result;
    });

    return {
      page_num,
      go_page,
      go_up,
      next,
      plusOne,
      go_one,
      go_end,
      total,
      pageInputBtn,
      pageInput,
    };
  },
};
</script>

<style>
.actived {
  background: rgb(179, 94, 94);
}
</style>
