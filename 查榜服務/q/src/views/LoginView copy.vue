<template>
  <div class="login-containt">
    <img class="logo" src="../assets/logo.png" />
    <LoginByCode v-show="logonType === 'code'"></LoginByCode>
    <LoginByPwd v-show="logonType === 'pwd'">></LoginByPwd>
    <button class="login-button" v-on:click="onSubmit">登入</button>
    <br />
    <div class="login-bottom-containt">
      <button
        class="change-login-type"
        @click="onChangeLoginType"
        v-show="logonType === 'pwd'"
      >
        驗證碼登入
      </button>
      <button
        class="change-login-type"
        @click="onChangeLoginType"
        v-show="logonType === 'code'"
      >
        密碼登入
      </button>
    </div>
  </div>
</template>

<script>
import LoginByCode from "../components/LoginByCode.vue";
import LoginByPwd from "../components/LoginByPwd.vue";

export default {
  components: { LoginByCode, LoginByPwd },
  name: "LoginView",
  data() {
    return {
      logonType: "pwd",
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/home");
      if (this.$data.logonType === "pwd") {
        // 密碼登入
        console.log("密碼登入");
      } else {
        // 驗證碼登入
        console.log("驗證碼登入");
      }
    },
    onChangeLoginType() {
      if (this.$data.logonType === "pwd") {
        this.$data.logonType = "code";
      } else {
        this.$data.logonType = "pwd";
      }
      console.log("切換登入方式");
    },
  },
};
</script>

<style scoped>
.login-containt {
  text-align: center;
}

.logo {
  margin-top: 28px;
  width: 100px;
  height: 100px;
}
.login-bottom-containt {
  text-align: center;
}
.login-button {
  margin-top: 40px;
}
.change-login-type {
  text-align: right;
  margin-top: 40px;
}
</style>
