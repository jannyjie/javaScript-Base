<template>
  <input class="mr-2 py-1 px-3" type="button" value="匯出" />
</template>

<script>
import { defineComponent } from "vue";
// import { defineComponent, toRefs, watch } from "vue";

export default defineComponent({
  name: "DownloadComponent",
  props: {
    getUrl: String,
    getArray: Array,
    title: Array,
    jsonKEY: Array,
  },
  // setup(props, { emit }) {
  //   const { getUrl } = toRefs(props);

  //   function getData() {
  //     // console.log("download2 =", getUrl.value);

  //     // fetch(getUrl.value, {
  //     //   method: "GET",
  //     // })
  //     //   .then((res) => {
  //     //     return res.json();
  //     //   })
  //     //   .then((res) => {
  //     //     download(res.dataLists, props.title, props.jsonKEY);
  //     //     emit("downloadEnd");
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log("download error path = ", getUrl.value);
  //     //     console.log("download error msg = ", error);
  //     //   });
  //   }

  //   function download(JSONData, title, JSONkey) {
  //     console.log("JSONData", JSONData);
  //     console.log("title", title);
  //     console.log("JSONkey", JSONkey);

  //     if (!JSONData) return;

  //     let excel = "<table>";

  //     // 設置表頭
  //     let rowTitle = "<tr>";

  //     title.forEach((item) => {
  //       rowTitle += "<th align='center'>" + item + "</th>";
  //     });

  //     excel += rowTitle + "</tr>";

  //     // 設置數據
  //     let rowContent = "";

  //     let key = Object.keys(JSONData[0]);

  //     for (let i = 0; i < JSONData.length; i++) {
  //       rowContent += "<tr>";

  //       JSONkey.forEach((item) => {
  //         key.includes(item)
  //           ? (rowContent +=
  //               "<td align='center'>" + JSONData[i][item] + "</td>")
  //           : "";
  //       });

  //       rowContent += "</tr>";
  //     }

  //     excel += rowContent + "</table>";

  //     let excelFile =
  //       "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
  //     excelFile +=
  //       '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
  //     excelFile +=
  //       '<meta http-equiv="content-type" content="application/vnd.ms-excel';
  //     excelFile += '; charset=UTF-8">';
  //     excelFile += "<head>";
  //     excelFile += "<!--[if gte mso 9]>";
  //     excelFile += "<xml>";
  //     excelFile += "<x:ExcelWorkbook>";
  //     excelFile += "<x:ExcelWorksheets>";
  //     excelFile += "<x:ExcelWorksheet>";
  //     excelFile += "<x:Name>";
  //     excelFile += "sheet1";
  //     excelFile += "</x:Name>";
  //     excelFile += "<x:WorksheetOptions>";
  //     excelFile += "<x:DisplayGridlines/>";
  //     excelFile += "</x:WorksheetOptions>";
  //     excelFile += "</x:ExcelWorksheet>";
  //     excelFile += "</x:ExcelWorksheets>";
  //     excelFile += "</x:ExcelWorkbook>";
  //     excelFile += "</xml>";
  //     excelFile += "<![endif]-->";
  //     excelFile += "</head>";
  //     excelFile += "<body>";
  //     excelFile += excel;
  //     excelFile += "</body>";
  //     excelFile += "</html>";

  //     let uri =
  //       "data:application/vnd.ms-excel;charset=utf-8," +
  //       encodeURIComponent(excelFile);

  //     let link = document.createElement("a");
  //     link.href = uri;

  //     link.style = "visibility:hidden";
  //     link.download =
  //       new Date().toISOString().replace(/[\-\:\.]/g, "") + ".xls";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }

  //   watch(getUrl, () => {
  //     console.log("download =", getUrl.value);
  //     if (getUrl.value !== undefined || getUrl.value.length !== 0) getData();
  //   });

  //   return {
  //     getData,
  //     download,
  //   };
  // },
});
</script>
