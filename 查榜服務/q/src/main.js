import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Qs from 'qs'
import { createMetaManager } from 'vue-meta'
import axios from './api/default/httpConfig'
import { createPinia } from 'pinia'
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App)
// app.prototype.$http = axios
app.use(router)
app.use(store)
app.use(axios)
app.use(Qs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
app.use(createPinia())
app.use(createMetaManager()) // add this line
app.mount('#app')


router.beforeEach((to, from, next) => {

    //????????????????????????????????????????????????
    let getFlag = localStorage.getItem("Flag");
  
    //??????????????????????????????isLogin?????????????????????
    if(getFlag === "isLogin"){
  
      //??????vuex????????????????????????
      store.state.isLogin = true
      next()
  
      //????????????????????????????????????????????????????????????????????????
    //   if (!to.meta.isLogin) {
    //      //iViewUi????????????
    //     alert("??????????????????")
    //     next({
    //       path: '/home'
    //     })
    //   }
    
    //??????????????????????????????????????????
    }else{
  
      //???????????????????????????????????????????????????????????????
      if(to.meta.isLogin){
        next({
          path: '/login',
        })
        //iViewUi????????????
        alert("????????????")
      //???????????????????????????????????????????????????
      }else{
        next()
      }
  
    }
  
  });
  
//   router.afterEach(route => {
//     window.scroll(0, 0);
//   });