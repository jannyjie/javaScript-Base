// 兩個Object型別物件，即使擁有相同屬性、相同值，當使用 == 或 === 進行比較時，也不認為他們相等。這就是因為他們是通過引用（記憶體裡的位置）比較的，不像基本型別是通過值比較的。
var obj1 = {
    name: "xiaoming",
    sex : "male"
}
 
var obj2 = {
    name: "xiaoming",
    sex : "male"
}
 
console.log(obj1 === obj2); // false

// 但是如果淺拷貝指向同一記憶體的時候，此時兩個物件相等。
var obj1 = {
    name: "xiaoming",
    sex : "male"
};
 
var obj2 = {
    name: "xiaoming",
    sex : "male"
};
 
var obj3 = obj1;
 
console.log(obj1 === obj3); // true
 
console.log(obj2 === obj3); // false

// 正如你所看想的，檢查物件的“值相等”我們基本上是要遍歷的物件的每個屬性，看看它們是否相等
var deepEqual = function (x, y) {
    // 指向同一記憶體時
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;
  
      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
  }
  
  console.log(deepEqual('aaa', 'aaa'));

//   雖然這個簡單的實現適用於我們的例子中，有很多情況下，它是不能處理。例如：

// 如果該屬性值之一本身就是一個物件嗎？
// 如果屬性值中的一個是NaN（在JavaScript中，是不是等於自己唯一的價值？
// 如果一個屬性的值為undefined，而另一個物件沒有這個屬性（因而計算結果為不確定？）