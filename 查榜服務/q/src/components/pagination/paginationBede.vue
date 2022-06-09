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
        <button class="page-link">Prev</button>
      </li>
      <li
        class="page-item"
        v-for="(item, index) in plusOne"
        :key="index"
        @click="go_page(item)"
        :class="{ active: item == page_num }"
      >
        <button class="page-link">{{ item }}</button>
      </li>
      <li
        class="page-item"
        :class="{ disabled: page_num == total }"
        @click="next"
      >
        <button class="page-link">Next</button>
      </li>
      <li
        class="page-item"
        @click="go_end"
        :class="{ disabled: page_num == total }"
      >
        <button class="page-link">&gt;|</button>
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
    const pageInput = ref(); // input
    const start = Number(page_num.value);
    const end = Number(total.value);
    function pageInputBtn(pages) {
      page_num.value = pages;
    }
    function go_page(pages) {
      page_num.value = pages;
    }
    function go_up() {
      if (start <= 1) {
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
      if (start >= end) {
        page_num.value = end;
      } else {
        page_num.value = start + 1;
      }
    }

    const plusOne = computed(() => {
      const initial = []; // 運算
      const result = []; // 運算
      for (let i = 0; i < total.value; i++) {
        initial.push(i + 1);
      }
      console.log(initial);
      if (start - 4 <= 0) {
        // console.log(initial.slice(0, 10));

        result.push(...initial.slice(0, start + (10 - start)));
        // console.log("result", initial);
      } else if (start - 4 >= 0 && start + 5 <= end) {
        // console.log(2);
        // console.log(
        //   initial.slice(Number(page_num.value) - 5,start + 5)
        // );
        result.push(...initial.slice(start - 5, start + 5));
      } else {
        // console.log(3);
        // console.log(
        //   initial.slice(
        //    start -
        //       (10 - (end -start)),
        //     end
        //   )
        // );
        result.push(...initial.slice(start - (10 - (end - start)), end));
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
