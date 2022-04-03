// https://guahsu.io/2017/06/JavaScript-Duplicates-Array/

// 1. filter()
// 我查了自己之前存在EverNote的資料，可以用ES6的filter()來解：

var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = origin.filter(function(element, index, arr){
    return arr.indexOf(element) === index;
});
var repeat = origin.filter(function(element, index, arr){
    return arr.indexOf(element) !== index;
});
console.log(result); // [1, 2, "a", 3, "b"]
console.log(repeat); // [1, "a"]

// 2. Set()
// 群組內的Dca大分享的方法，使用ES6的Set()來做唯一值確認，
// 可以利用Set()提供的has與add來簡潔的達到篩選：
var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = new Set();
var repeat = new Set();
origin.forEach(item => {
    result.has(item) ? repeat.add(item) : result.add(item);
})
console.log(result); // {1, 2, "a", 3, "b"}
console.log(repeat); // {1, "a"}

// 3. Object + Object.keys()
// 群內另一位龍大分享不使用ES6來完成的方法
// 可以取得不重複值，也可以用物件去判斷出現次數來做重複值的選取：

var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = {};
origin.forEach(function(item) {
  result[item] = result[item] ? result[item] + 1 : 1;
});
console.log(Object.keys(result)); // ["1", "2", "3", "a", "b"]
console.log(result); // Object {1: 2, 2: 1, 3: 1, a: 2, b: 1}

// 以下是我自己寫成其他形狀的紀錄..XD
// ！只能取得結果字串，本身沒其他功能（例如原本的記數功能）！

var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = {};
var repeat = {};
origin.forEach(function(item) {
  result.hasOwnProperty(item)? repeat[item] ++: result[item] ++;
});
console.log(Object.keys(result)) // ["1", "2", "3", "a", "b"]
console.log(Object.keys(repeat)) // ["1", "a"]

// 注意因為是使用Object.keys()來獲得重複/不重複的值，回傳為排序好的字串。
// 關於為何需要repeat[item]++/repeat[item]++則是因為要建立該物件屬性，
// ！需注意如果直接空值++會是NaN，可能會導致空值判斷錯誤 ！

var obj = {};
obj['a']; // 沒賦值，此屬性不會被建立
obj['b']; // 沒賦值，此屬性不會被建立
console.log(obj); // Object {}
console.log(Object.keys(obj)); // []

obj['a']++; // 有賦值(直接++會得到NaN)，所以有建立屬性a
obj['b'] = ''; // 有賦值(給了一個空字串'')，所以有建立屬性b
console.log(obj); // Object {a: NaN, b: ""}
console.log(Object.keys(obj)); // (2) ["a", "b"]

// 4. reduce()
// Dca大分享的方法2，可用來回傳不重複值
var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = origin.reduce((obj, item) => {
    obj[item] = 1;
    return obj;
}, {});
console.log(Object.keys(result)); // ["1", "2", "3", "a", "b"]

// 或是將其出現次數記錄下來，之後在寫判斷次數取用(七索大提供思路)

var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = origin.reduce((obj, item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
    return obj;
}, {});
console.log(result); // Object {1: 2, 2: 1, 3: 1, a: 2, b: 1}

// 5. Set() + Array.from()
// 後來又查到的新方法，更加簡潔的獲取不重複值

var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
var result = Array.from(new Set(origin));
console.log(result); // [1, 2, "a", 3, "b"]