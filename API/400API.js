//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // 如果config不存在或未设置重试选项，请拒绝 
    if (!config || !config.retry) return Promise.reject(err);
    // 设置变量跟踪重试次数 
    config.__retryCount = config.__retryCount || 0;
    // 检查是否已经达到最大重试总次数
    if (config.__retryCount >= config.retry) {
        // 抛出错误信息  
        return Promise.reject(err);
    }
    // 增加请求重试次数 
    config.__retryCount += 1;
    // 创建新的异步请求 
    var backoff = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, config.retryDelay || 1);
    });

    // 返回axios信息，重新请求
    return backoff.then(function () {
        return axios(config);
    });
});