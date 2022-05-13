import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Qs from 'qs'
import { createMetaManager } from 'vue-meta'
import axios from './api/default/httpConfig'


const app = createApp(App)
// app.prototype.$http = axios
app.use(router)
app.use(store)
app.use(axios)
app.use(Qs)
app.use(createMetaManager()) // add this line
app.mount('#app')