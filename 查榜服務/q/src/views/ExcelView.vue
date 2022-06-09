<template>
  <h1>excelVue2 Vu2 寫法</h1>
  <excelVue2 />
  <h2>excelVue3 Vu3 寫法</h2>
  <p>解析上載 excel</p>
  <excelVue3 />
  <h2>excelVue3 Vu3 寫法</h2>
  <p>解析上載 excel</p>
  <download
    @click="download"
    :getUrl="downloadUrl"
    :title="title"
    :jsonKEY="jsonKEY"
    @downloadEnd="changePageShow"
  ></download>
</template>

<script>
import excelVue2 from "../components/excel/excelVue2.vue";
import excelVue3 from "../components/excel/excelVue3.vue";
import download from "../components/excel/download.vue";
import { ref } from "vue";
export default {
  components: {
    excelVue2,
    excelVue3,
    download,
  },
  setup() {
    async function download() {
      // let query = getQuery()
      //   .value.replace("pageshow=10", "pageshow=" + list.totalrecord)
      //   .replace("page=" + getDataQuery.page, "page=1");
      // const url = "http://192.168.1.234/eventAPI/api/22yADM/GetRSV?" + query;
      // console.log("url", url);
      // downloadUrl.value = url;
    }
    const downloadUrl = ref("");
    const title = [
      "序號",
      "履歷編號",
      "姓名",
      "註冊時間",
      "報名時間",
      "修改時間",
      "應試碼",
      "會員的年紀",
      "會員手機號碼",
    ];
    const jsonKEY = [
      "sid",
      "talentNo",
      "name",
      "dateLogFirst",
      "dateIn",
      "str_lastUpdateDate",
      "ticketNum",
      "age",
      "mobile",
    ];
    return {
      download,
      downloadUrl,
      title,
      jsonKEY,
    };
  },
};
</script>

<style></style>
