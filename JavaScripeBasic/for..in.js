//在 JavaScript 中有一個非常常用到的函式 for ... in 迴圈，for...in 的用法和 Array.prototype.forEach 很像，但它可以針對**物件（Object）或陣列（Array）**來使用。

var john = {
    firstName: 'John',
    lastName: 'Doe'
}; 

for (var prop in john) {
    console.log(prop + ':' + john[prop]);
}