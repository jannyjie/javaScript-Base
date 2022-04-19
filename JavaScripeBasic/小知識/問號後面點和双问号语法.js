// 当访问多层对象属性(比如 res.data.list)时，如果属性res.data为空，则会报引用错误
// 为此我们不得不这么处理： 

let aa = res && res.data && res.data.lst;

// 看着非常不美观，今天介绍的新语法就是为了解决这种问题的 (可选链操作符?.)
// 有了可选链，就可以对一个为null或者undefined属性安全引用：

let bb = res?.data?.list

// 二、什么是双问号

value ?? value

// ??在value1和value2之间，只有当value1为null或者 undefined时取value2，
// 否则取value1（0,false,""被认为是有意义的，所以还是取value1）

const obj = {};
const c_or_d = obj.c ?? 'd';

console.log(c_or_d);

console.log(0 ?? 1);
console.log("" ?? 'foo');