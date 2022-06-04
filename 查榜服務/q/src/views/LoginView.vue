<template>
  <div v-if="!isReg" class="login">
    <div class="input-box">
      <p>NAME</p>
      <input
        type="text"
        placeholder="輸入使用者名稱"
        v-model="registered.username"
      />
      <p v-if="error_message.username">
        <span class="error">err : {{ error_message.username }}</span>
      </p>
    </div>
    <div class="input-box">
      <p>PASSWORD</p>
      <input
        type="password"
        placeholder="輸入密碼"
        v-model="registered.password"
      />
      <p v-if="error_message.password" class="error">
        {{ error_message.password }}
      </p>
    </div>
    <div class="input-box">
      <p>E-MAIL</p>
      <input type="text" placeholder="輸入email" v-model="registered.email" />
      <p v-if="error_message.email" class="error">
        {{ error_message.email }}
      </p>
    </div>
    <div class="input-box">
      <p>年齡</p>
      <input type="number" placeholder="輸入年齡" v-model="registered.age" />
    </div>
    <div class="input-box">
      <input type="radio" id="boy" value="boy" v-model="registered.sex" />
      <label for="boy">boy</label>
      <input type="radio" id="girl" value="girl" v-model="registered.sex" />
      <label for="girl">girl</label>
    </div>
    <div class="input-box">
      <input type="checkbox" id="checkbox" v-model="registered.terms" />
      <label for="checkbox">我已閱讀使用者條款</label>
    </div>
    <a class="btn" @click="handRegisteredFn">送出</a>
  </div>
  <div v-if="isReg">
    <h1>註冊成功</h1>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios
import { ref, reactive } from "vue";
import { useLoginStore } from "@/store/login";
export default {
  name: "LoginView",
  setup() {
    const store = useLoginStore();
    console.log(store);
    const isReg = ref(false);
    const registered = reactive({
      username: "",
      password: "",
      sex: "",
      email: "",
      age: "",
      terms: false,
    });
    const error_message = reactive({});

    const successFn = () => {
      alert("註冊成功");
      isReg.value = true;
      store.isLogin = true;
      localStorage.setItem("Flag", "isLogin");
    };

    // const errorFn = (err) => {
    //   Object.keys(err).forEach((key) => (error_message[key] = err[key]));
    // };

    const err = ref([]);

    const handRegisteredFn = () => {
      axios
        .post(
          "https://vue-lessons-api.herokuapp.com/auth/registered ",
          registered
        )
        .then((res) => {
          console.log(res);
          successFn();
        })
        .catch((err) => {
          err.value = err;
          // errorFn(err.response.data.error_message);
        });
    };

    return { isReg, registered, handRegisteredFn, error_message, err };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
.error {
  font-size: 12px;
  color: red;
}
.login {
  width: 200px;
  margin: 28px auto 0 auto;
}
input[type="text"],
input[type="password"],
input[type="number"] {
  width: 200px;
}
a.btn {
  background: #f3ecce;
  width: 100%;
  margin-top: 20px;
}
</style>
