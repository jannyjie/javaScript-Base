// .concat()  方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。
// every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。
// filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
// forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
// join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
// indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
// lastIndexOf() 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 fromIndex。
// map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
// reverse() 方法會原地（in place）反轉（reverses）一個陣列。陣列中的第一個元素變為最後一個，而最後一個元素則變成第一個。
// slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
// some() 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是布林值。
// toString() 方法將回傳一個可以表達該陣列及其元素的字串。
// valueOf() 方法返回指定对象的原始值。


// .concat()  方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。
const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold));
// expected output: true

// filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
let array = [1, 2, 3, 0, 4, 5, 6, 7, 4, 8, 9, 3, 0];

function removeDuplicates(originArray) {
  let result = originArray.filter(function(value, index, arrSelf){ 
    return arrSelf.indexOf(value) === index
    });
  return result.sort(); // .sort() 排序
};

console.log(removeDuplicates(array)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
const arrayq = ['a', 'b', 'c'];

arrayq.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1
// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1


// lastIndexOf() 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 fromIndex。
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

// map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
const array1s = [1, 4, 9, 16];

// pass a function to map
const map1 = array1s.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

// reverse() 方法會原地（in place）反轉（reverses）一個陣列。陣列中的第一個元素變為最後一個，而最後一個元素則變成第一個。
const array1ss = ['one', 'two', 'three'];
console.log('array1:', array1ss);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1ss.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1ss);
// expected output: "array1:" Array ["three", "two", "one"]

// slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//some() 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是布林值。
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

// toString() 方法將回傳一個可以表達該陣列及其元素的字串。
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"