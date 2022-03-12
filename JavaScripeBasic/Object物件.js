// 除了本身能夠實體化之外, 也是其他物件的基底物件換句話說, 無論室內件物件或使用者自訂物件都會具備Object物件所提供的屬性與方法

var student = new Object();

student.ID = 'A009';
student.name = '王小名';
student.showMsg = function(){
  window.alert(`學號: ${this.ID}名子: ${this.name}`);
};

student.showMsg();

// Object 還有提供其他的 數個'屬性與方法

var a = new Object();

console.log(a.toString()); // [object Object]
console.log(a.valueOf()); // [object Object] { ... }

var b = 100;

console.log(b.toString()); // "100" 字串
console.log(b.valueOf()); // 100 數字

var c = '小明';

console.log(c.toString()); // "小明" 字串
console.log(c.valueOf()); // "小明" 字串

var d = new Date();

console.log(d.toString()); // "Fri Mar 11 2022 16:38:10 GMT+0800 (GMT+08:00)"
console.log(d.valueOf()); // 1646987890446 (此為時間戳記)

