// sort() 排序演算法

let fruits = ["Grapes", "Banana", "Apple"]
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Grapes' ]

let luckies = [15, 1,2,16,99,17,3]; // an array of number => sort()
// console.log(luckies.sort());  // [1, 15, 16, 17,2,  3, 99]  string  排法

// 應該這樣寫
let aa = luckies.sort((a, b) => {
    return a - b ;
})

console.log(aa);