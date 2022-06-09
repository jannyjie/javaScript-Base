<template>
  <div class="container p-3 mb-3" v-cloak>
    <div class="search mb-2">
      <div class="row">
        <div class="col">
          <label for="skey">關鍵字：</label>
          <input
            id="skey"
            v-model="getDataQuery.skey"
            type="text"
            name="skey"
            placeholder="關鍵字搜尋(履編/姓名)"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="ticketNum">應試號碼搜尋：</label>
          <input
            id="ticketNum"
            v-model="getDataQuery.ticketNum"
            type="number"
            name="ticketNum"
            placeholder="應試號碼搜尋"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="skey">活動日期搜尋：</label>
          <input type="date" v-model="getDataQuery.sdate" /> ~
          <input type="date" v-model="getDataQuery.edate" />
        </div>
      </div>
      <div class="row">
        <div class="col text-right">
          <DownloadComponent
            @click="download"
            :getUrl="downloadUrl"
            :title="title"
            :jsonKEY="jsonKEY"
            @downloadEnd="changePageShow"
          ></DownloadComponent>
          <input
            class="mr-2 py-1 px-3"
            type="button"
            value="清除"
            @click="reload"
          />
          <input
            class="py-1 px-3"
            type="button"
            value="搜尋"
            @click="search(1)"
          />
        </div>
      </div>
    </div>

    <div class="title mb-2 text-center">報名名單</div>
    <p>搜尋總資料數量：{{ totalrecord }}筆</p>

    <div class="table row th m-0">
      <div class="col">序號</div>
      <div class="col">履歷編號</div>
      <div class="col">姓名</div>
      <div class="col">註冊時間</div>
      <div class="col">報名時間</div>
      <div class="col">修改時間</div>
      <div class="col">應試碼</div>
      <div class="col">會員手機號碼</div>
      <div class="col">會員的年紀</div>
      <div class="col">刪除</div>
    </div>

    <template v-if="!fetching">
      <div class="table row td m-0" v-for="item in data" :key="item.sid">
        <div class="col">{{ item.sid }}</div>
        <div class="col">{{ item.talentNo }}</div>
        <div class="col">{{ item.name }}</div>
        <div class="col">{{ item.str_dateLogFirst }}</div>
        <div class="col">{{ item.str_dateIn }}</div>
        <div class="col">
          <template
            v-if="item.str_lastUpdateDate !== '0001/1/1 上午 12:00:00'"
            >{{ item.str_lastUpdateDate }}</template
          >
        </div>
        <div class="col">{{ item.ticketNum }}</div>
        <div class="col">{{ item.mobile }}</div>
        <div class="col">{{ item.age }}</div>
        <div class="col">
          <button
            class="btn btn-danger btn-sm"
            type="button"
            @click="check_del(item.sid)"
          >
            刪除
          </button>
        </div>
      </div>

      <div class="row m-0 page justify-content-center">
        <div @click="search(1)" class="col-1">首頁</div>
        <div @click="search(getDataQuery.page - 1)" class="col-1">上一頁</div>
        <div class="col-2">
          第
          <select
            @change="search(getDataQuery.page)"
            v-model="getDataQuery.page"
          >
            <option v-for="page in totalpage" :value="page" :key="page">
              {{ page }}
            </option>
          </select>
          頁
        </div>
        <div @click="search(getDataQuery.page + 1)" class="col-1">下一頁</div>
        <div @click="search(totalpage)" class="col-1">最末頁</div>
      </div>
    </template>

    <template v-else>
      <div class="row td m-0 table">
        <div class="col">正在查詢</div>
      </div>
    </template>
  </div>
</template>

<script>
import DownloadComponent from "@/components/Download.vue";

import { reactive, ref, toRefs, onBeforeUpdate } from "vue";
import { useSignupData, useDel } from "@/composition-API/index.js";

import { useUserStore } from "@/store/user.js";
import { storeToRefs } from "pinia";

export default {
  components: {
    DownloadComponent,
  },
  setup() {
    const userStore = useUserStore();
    const { users, loginUrl, state } = storeToRefs(userStore);

    const list = reactive({
      data: [],
      totalpage: 0,
      totalrecord: 0,
      fetching: true,
    });
    const getDataQuery = reactive({
      pageshow: 10,
      page: 1,
      skey: "",
      ticketNum: "",
      sdate: "",
      edate: "",
      backend: 1,
    });

    userStore.fetchUsers();

    getData(getQuery().value);

    onBeforeUpdate(async () => {
      console.log("users", users.value);
      console.log("state", state.value);

      // if(users.value == '') {
      //   alert('您尚未登入')
      //   window.location.href = loginUrl.value
      // } else if (state.value !== 1) {
      //   alert('您沒有權限，請洽工程部！')
      //   window.location.href = loginUrl.value
      // }
    });

    function search(page) {
      if (page > list.totalpage) {
        page = list.totalpage;
      } else if (page < 0) {
        page = 1;
      }

      getDataQuery.page = page;
      getData(getQuery().value);
    }

    function getQuery() {
      const query = ref("");
      const count = ref(0);

      Object.keys(getDataQuery).forEach((item) => {
        if (getDataQuery[item] !== "" && count.value === 0) {
          count.value = count.value + 1;
          query.value += `${item}=${getDataQuery[item]}`;
        } else if (getDataQuery[item] !== "" && count.value !== 0) {
          query.value += `&${item}=${getDataQuery[item]}`;
        }
      });

      return query;
    }

    async function getData(query) {
      const res = await useSignupData(query);
      list.data = res.data;
      list.totalpage = res.totalpage;
      list.totalrecord = res.totalrecord;
      list.fetching = res.fetching;
    }

    function check_del(sid) {
      if (confirm("確定要刪除序號" + sid + "資料? 資料刪除無法挽回")) {
        del(sid);
      } else {
        alert("取消刪除");
      }
    }

    async function del(sid) {
      const res = await useDel(sid, users.value);
      alert(res.response.value);
      getData(getQuery().value);
    }

    async function download() {
      let query = getQuery()
        .value.replace("pageshow=10", "pageshow=" + list.totalrecord)
        .replace("page=" + getDataQuery.page, "page=1");
      const url = "http://192.168.1.234/eventAPI/api/22yADM/GetRSV?" + query;
      console.log("url", url);
      downloadUrl.value = url;
    }

    function changePageShow() {
      getDataQuery.pageshow = 10;
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

    function reload() {
      window.location.reload();
    }

    return {
      getData,
      getQuery,
      getDataQuery,
      search,
      ...toRefs(list),
      check_del,
      del,
      download,
      changePageShow,
      reload,
      downloadUrl,
      title,
      jsonKEY,
    };
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

.search {
  width: 100%;
  background: #e2edd1;
  padding: 10px;
}

.title {
  width: 150px;
  background: #eed5c1;
}

.content {
  background: #fbf4f0;
}

.table > .col {
  border: 1px solid #c97536;
  border-right: none;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table .col:last-child {
  border-right: 1px solid #c97536;
}

.th {
  background: #eed5c1;
  text-align: center;
}

.td {
  background: #fbf4f0;
  text-align: center;
}

.page {
  background: #e8e3df;
  cursor: pointer;
  font-size: 12px;
}
</style>
