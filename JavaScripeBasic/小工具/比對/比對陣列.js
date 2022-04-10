var a = ["1","3","5","9","7"];
var c = ["1","3","5","9","7"];
var b =["3","1","5","7","9"];

// 1.先判斷陣列的長度

// 2.如果長度相等，再將陣列排序用sort();

// 3.將兩陣列轉換為string再進行比較（因為a,b的儲存位置不同）

console.log(JSON.stringify(a) == JSON.stringify(c)) // 2

// JSON.stringify()方法將 JavaScript 值轉換為 JSON 字符串，
// 如果指定了替換函數，則可選地替換值，或者如果指定了替換器數組，則可選地僅包括指定的屬性。
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
