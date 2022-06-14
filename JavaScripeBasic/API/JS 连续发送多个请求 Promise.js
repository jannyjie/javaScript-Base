// https://blog.csdn.net/qq_33933205/article/details/108075177

// **JS 连续发送多个请求 Promise.all() Promise.race() **
// 如果在运行这一些异步方法的时候，其中一个方法出了异常，走了reject()线，这会导致Promise.all()整个方法立马结束并输出出故障的Promise的返回值并走catch路线，执行里面的方法。这个err就是故障线返回值。

// Promise.race()

// 它在格式和执行流程上和上面的Promise.all()没有任何差异，唯一差异就存在于走then线路的输出值res，在Promise.all()中输出值的排列是按部就班的，但是这里不是，它这里是需要比较异步执行速度的，只输出第一个被执行完成的Promise()的返回值，如果第一个被执行完成的Promise以resolve()形式返回，就走then路线，反之走catch路线，第一个Promise执行完成之后再也不会执行后面的

// 参考源码
let a1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject(10)
    }, 100)
})
let a2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject(10)
    }, 3000)
})
let a3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject(10)
    }, 1000)
})
let a4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject(10)
    }, 2000)
})

Promise.race([a1, a2,a3,a4]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// 其他写法
// 适合一些需要配合迭代的参数并批量执行的类似的异步代码的方法，可以大大节省代码量。这也是我在当前项目采用的方法

Promise.all(this.Array.map((item, i) => {
    return new Promise((resolve, reject) => {
        resolve()
        reject()
    })
})).then(res => {

}).catch(err => {

})