var Person = function(){};

var BusinessPerson = function(){};

BusinessPerson.prototype = new Person();

var bp = new BusinessPerson();

console.log(bp instanceof BusinessPerson); // true
console.log(bp instanceof Person); // true
console.log(bp instanceof Object); // true (所有的物件都繼承了object)