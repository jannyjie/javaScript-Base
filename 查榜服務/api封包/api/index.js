import {get} from '@/api/default/httpConfig.js';
import {ref} from 'vue'

const url = ref('');
url.value = 'https://event.1111.com.tw/'

// post格式
// export const register = p => post('/api/user/register', p);
// export const login = p => post('/api/user/login', p); 
// // get格式
// export const courses = g => get('/api/courses', g);
// export const coursesXq = (g,q) => get('/api/courses/'+q.add, g); 
// export const getList = type => get(`${url.value}/api/home-banners?${type}`);
export const getList = () => get(`${url.value}eventAPI/tool/api_check_talentNo.asp`);
