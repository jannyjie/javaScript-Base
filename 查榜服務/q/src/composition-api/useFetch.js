// import { ref } from "vue";
import { getList, login } from '@/api/index'

export function useFetchApi() {
  
  getList().then(res => {
    console.log('getList123', res);
  })

}

export function loginApi(postData) {
    login(postData)
       .then(res => {
         console.log('login', res);
       })
       .catch(err => {
         console.log(err);
       });

}