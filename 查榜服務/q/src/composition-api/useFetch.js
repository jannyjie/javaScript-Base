// import { ref } from "vue";
import { getList } from '@/api/index'

export function useFetchApi() {
  
  getList().then(res => {
    console.log('getList123', res);
  })

}
