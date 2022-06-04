<template>
  <input
    type="file"
    accept=".xls,.xlsx"
    class="upload-file"
    @change="changeExcel($event)"
  />
  <div v-if="tableData != ''">
    <div v-for="(item, index) in tableData" :key="index">
      <p>Name: {{ item.Name }}</p>
      <p>id : {{ item.id }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import * as XLSX from "xlsx"; // vue3可用此引入
export default {
  setup() {
    const tableData = ref([]);
    function changeExcel(e) {
      const files = e.target.files;
      if (files.length <= 0) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        console.log(
          " The upload format is incorrect , Please upload xls perhaps xlsx Format "
        );
        return false;
      }
      // Read the form
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        const workbook = XLSX.read(ev.target.result, {
          type: "binary",
        });
        const wsname = workbook.SheetNames[0];
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);
        console.log("ws:", ws); // convert to json The data of
        // dealExcel(ws) ... Operate the data as you need
        tableData.value = ws;
      };
      fileReader.readAsBinaryString(files[0]);
    }
    function dealExcel(ws) {
      let keymap = {
        // We're going to convert the beginning
        " staff ": "name",
        " Job number ": "num",
        " Login account ": "account",
        " department ": "department",
      };
      ws.forEach((sourceObj) => {
        Object.keys(sourceObj).map((keys) => {
          let newKey = keymap[keys];
          if (newKey) {
            sourceObj[newKey] = sourceObj[keys];
            delete sourceObj[keys];
          }
        });
      });
      tableData.value = ws;
    }

    return {
      changeExcel,
      dealExcel,
      tableData,
    };
  },
};
</script>

<style></style>
