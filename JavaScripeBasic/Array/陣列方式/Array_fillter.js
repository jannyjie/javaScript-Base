//  filter 函式，可以幫助我們過濾一個陣列中符合條件的元素，若不符合則刪除。不更改原陣列，而回傳新陣列。
// filter 函式，接受一個 callback 函式，callback 可以有三個參數(element, index, array)，

// element：陣列元素的值。
// index：陣列元素的所在位置。
// arr：已經過 filter 處理的陣列

var numbers=[20, 10, 9, 25, 1, 3, 8, 11]; 
var result=numbers.filter(function(element, index, arr){ 
return element >= 10; 
}); 
console.log(result); // [20, 10, 25, 11]