// forEach()本身可帶兩個參數，第一個是必須的 callback 函式，第二個參數thisArg 是可選擇性的。這個callback 函式會將 Array 中的每一個元素作為參數，帶進這個 callback 函式裡，每個元素各執行一次。

// 而第一個 callback 函式則可傳入三個參數：

// currentValue 目前被處理的陣列元素值
// index 目前被處理的陣列元素索引(可選)
// array 呼叫forEach()陣列本身(可選)

arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);


let data = [1, 2, 3, 4, 5];
let sum = 0;
data.forEach(function(value){
   sum += value;
});

console.log(sum); // 加總