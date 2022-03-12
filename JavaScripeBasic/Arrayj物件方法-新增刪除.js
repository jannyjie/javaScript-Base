pop();
// pop() 方法會移除並回傳陣列的最後一個元素。此方法會改變陣列的長度。
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

push();
// push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


shift();
// shift() 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1

unshift();
// unshift() 方法會添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。
const arr = [1, 2, 3];

console.log(arr.unshift(4, 5));
// expected output: 5
console.log(arr);
// expected output: Array [4, 5, 1, 2, 3]


splice();
// splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

