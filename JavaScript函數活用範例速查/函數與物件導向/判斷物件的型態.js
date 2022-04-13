var Person = function() {};
var BusinessPerson = function (){};

BusinessPerson.prototype = new Person();
var bp = new BusinessPerson();

console.log(bp instanceof BusinessPerson); // true
console.log(bp instanceof Person); // true
console.log(bp instanceof Object); // true (所有物件都繼承了 Object)

// 判斷建構式的型態 --- instanceof運算子

// 確認參照的原型 --- isPrototypeOf方法

console.log(BusinessPerson.prototype.isPrototypeOf(bp)); // true
console.log(Person.prototype.isPrototypeOf(bp)); // true
console.log(Object.prototype.isPrototypeOf(bp)); // true

// 判斷有無持有成員---- in運算子

var obj = {method1: function(){},  method2: function(){}};

console.log('method1' in obj); // true
console.log('method2' in obj); // true