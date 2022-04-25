// 將color陣列所有數字加總
var color = [20, 50, 60, 70, 10, 60, 80, 20];

var sum = color.reduce((sum, item) => {
  return sum + item
}, 0); // 設定累加器初始值

console.log(sum); 

// 提示

// 若沒設定初始值則會把第一個元素當作初始值

// 但若處理非單純數字加總的情境會容易出錯


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);


//////////////$Recycle.Bin
let array = [0, 1, 2, 3, 4]
array.reduce((acc, cur) => {
   acc += cur
   return acc
}, 0)

/////////////$Recycle.Bin
var total = [ 0, 1, 2, 3 ].reduce(
    ( acc, cur ) => acc + cur,
    0
  );