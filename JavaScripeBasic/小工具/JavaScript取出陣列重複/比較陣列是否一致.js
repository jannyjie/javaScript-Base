var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
var a3 = [1, 2, 3, 4];

Array.prototype.equals = function (getArray) {
  if (this.length != getArray.length) return false;

  for (var i = 0; i < getArray.length; i++) {
    if (this[i] instanceof Array && getArray[i] instanceof Array) {
      if (!this[i].equals(getArray[i])) return false;
    } else if (this[i] != getArray[i]) {
      return false;
    }
  }
  return true;
};

console.log("Comparing a1 and a2", a1.equals(a2));
console.log("Comparing a1 and a3", a1.equals(a3));
// Comparing a1 and a2 true
// Comparing a1 and a3 false

// JSON.stringify() 在 JavaScript 中比較陣列

var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
var a3 = [1, 2, 3, 4];

console.log("Comparing a1 and a2", JSON.stringify(a1) === JSON.stringify(a2));
console.log("Comparing a1 and a3", JSON.stringify(a1) === JSON.stringify(a3));
// Comparing a1 and a2 true
// Comparing a1 and a3 false

// 在 JavaScript 中使用迴圈比較兩個陣列
var a1 = [1, 2, 3];
var a2 = [1, 2, 3]; 
var a3 = [1, 2, 3, 4];

const getResult = function (a1, a2) {
   var i = a1.length;
   if (i != a2.length) return false;

   while (i--) {
     if (a1[i] !== a2[i]) return false;
   }
   return true;
 };

console.log("Comparing a1 and a2", getResult(a1, a2));
console.log("Comparing a1 and a3", getResult(a1, a3));

// Comparing a1 and a2 true
// Comparing a1 and a3 false