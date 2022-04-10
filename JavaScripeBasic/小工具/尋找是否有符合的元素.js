// 方法一：indexOf
// 使用原生 JavaScript 的Array.prototype.indexOf()。

// 如下例，陣列 fruit 中有三種水果，分別是蘋果 (apple)、橘子 (orange) 和 葡萄 (grape)。

// 找「芒果」(mango)，回傳 -1，表示找不到。

// 找「葡萄」(grape)，回傳 2，表示在陣列中的第三個位置找到。
var fruits = ['apple', 'orange', 'grape'];

console.log(fruits.indexOf('mango'))// -1
console.log(fruits.indexOf('grape')) // 2

// 方法三：filter
// 使用 Array.prototype.filter() 回傳符合條件的元素，得到一個新陣列。

// 如下例，回傳大於 10 的數字。

var numbers = [1, 3, 6, 10, 99, 101];

var filteredNum = numbers.filter(function(value) {
  return value > 10;
});

filteredNum; // [99, 101]

// 找「鳳梨」(pineapple)，回傳空陣列，表示找不到。

var fruits = ['apple', 'orange', 'grape'];

var filtered = fruits.filter(function(value) {
  return value === 'pineapple';
});

filtered; // []
// 找「葡萄」(grape)，回傳含有 grape 字串的陣列，表示找到。

filtered; // ["grape"]
// 又，在一陣列包含陣列的複雜結構中，要怎麼找到符合條件的元素呢？如下，找到開頭為「小小」的字串。（2020/02/25 更新）

const list = [
  ['小明', '小小明', '小明明'],
  ['小華', '小小華', '小華華'],
  ['小美', '小小美', '小美美'],
];
const newList = [].concat(...list); // newList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = newList.filter((value) => value.match(/^小小/g));

console.log(result); // ["小小明", "小小華", "小小美"]
// 解法為先打平陣列再做搜尋，可參考這裡。