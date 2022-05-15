import { ref } from "vue";
import { getList } from '@/api/index'

export function useFetchApi() {
  const user = ref("");
  getList().then(res => {
    user.value = res;
    console.log('getList123', res);
  })
  return{user}
}
