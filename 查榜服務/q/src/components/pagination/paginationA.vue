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
    const num = ref("10"); // 分頁數量
    const pageInput = ref(); // input
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
      const aa = []; // 運算
      const bb = []; // 運算
      for (let i = 0; i < total.value; i++) {
        aa.push(i + 1);
      }
      if (Number(page_num.value) + 9 < Number(total.value)) {
        bb.push(
          ...aa.slice(
            Number(page_num.value) - 1,
            Number(page_num.value) + (Number(num.value) - 1)
          )
        );
        console.log(Number(page_num.value) - 1);
        console.log(Number(page_num.value) + (Number(num.value) - 1));
      } else {
        bb.push(
          ...aa.slice(
            Number(total.value) - Number(num.value),
            Number(total.value)
          )
        );
      }
      return bb;
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
