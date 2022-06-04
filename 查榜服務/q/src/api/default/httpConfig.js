import axios from 'axios' // 引入axios
import Qs from 'qs'
// import store from '../store/index' // 引入Vuex
// import router from '../router' // 引入vue-router
// import {
//     Message
// } from 'element-ui' //局部引入UI框架组件
// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = 'https://xxx/' // 开发环境
// } else if (process.env.NODE_ENV === 'debug') {
//     axios.defaults.baseURL = '' // 调试环境
// } else if (process.env.NODE_ENV === 'production') {
//     axios.defaults.baseURL = 'https://xxx/' // 生产环境
// }
axios.defaults.timeout = 10000;
function generateReqKey(config) {
    const {
        method,
        url,
        params,
        data
    } = config;
    return [method, url, Qs.stringify(params), Qs.stringify(data)].join("&");
}
const pendingRequest = new Map();

function addPendingRequest(config) {
    const requestKey = generateReqKey(config);
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
        if (!pendingRequest.has(requestKey)) {
            pendingRequest.set(requestKey, cancel);
        }
    });
}

function removePendingRequest(config) {
    const requestKey = generateReqKey(config);
    if (pendingRequest.has(requestKey)) {
        const cancelToken = pendingRequest.get(requestKey);
        cancelToken(requestKey);
        pendingRequest.delete(requestKey);
    }
}
// 请求拦截器
axios.interceptors.request.use(
    config => {
        //  進到頁面刷新一次
        // if(location.href.indexOf("#reloaded")==-1){
        //     location.href = location.href+"#reloaded";
        //     location.reload();
        // }
        
        console.log(config);
        removePendingRequest(config); // 檢查是否存在重複請求，若存在則取消已發的請求
        addPendingRequest(config); // 把當前請求信息添加到pendingRequest對象中
        return config
    },
    error => {
        console.log('s', error);
        // return error
    })

// // // 响应拦截器
axios.interceptors.response.use(
    // 服务码是200的情况
    response => {
        removePendingRequest(response.config); // 從pendingRequest對象中移除請求
        return response
    },
    // 服务器状态码不是200的情况 message
    error => {
        removePendingRequest(error.config || {}); // 從pendingRequest對象中移除請求
        if (axios.isCancel(error)) {
            console.log("已取消的重複請求：" + error.message);
        } else {
            // 添加異常處理
        }
        console.log('status', error.response.status);
        return Promise.reject(error);
    }
)


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} config [请求时url后直接加的参数，默认为空]
 */
export function get(url, params, config = {
    add: ''
}) {
    return new Promise((resolve) => {
        axios.get(url, {
            params: params
        }, config).then(res => {
            if (res.data === '') {
                console.log(1);
            }
            resolve(res.data)
        }).catch(err => {
            console.log('message', err.message);
        })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} config [是否启用multipart/form-data格式请求，默认为false]
 */
export function post(url, params, config = {
    isUpload: false
}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {

                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}