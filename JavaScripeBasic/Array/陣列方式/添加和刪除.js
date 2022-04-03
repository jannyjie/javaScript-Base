var number = [0, 1, 2, 3, 4, 5, 6];
console.log(number.length); // 7

// push 添加
number.push(7);
console.log(number.length); // 8

//移除第一個而外在另外回塞到笛一個取代
for(var i = number.length; i >= 0; i--){
    number[i] = number[i -1];
}
number[0] = -1;
console.log(number); //[-1, 1, 2, 3, 4, 5, 6, 7]

//新增首位
number.unshift(-2);
console.log(number); //[-2,-1, 1, 2, 3, 4, 5, 6, 7]

// 移除最後一個
number.pop();
console.log(number); // [-1, 1, 2, 3, 4, 5, 6]

// 如果要移除第一個元素
for(var i = 0; i < number.length; i++){
    number[i] = number[i+1]
}
// 把陣列所有往左移一位，這樣就會有一個元素會是undefined,在迴圈裡 i+1 引用就會拋出問題所以需要再 length-1 停止迴圈

// 刪除第一個元素
//shift();
number.shift();
console.log(number); //[0, 1, 2, 3, 4, 5, 6, undefined]

// splice()  // 刪除擷取區塊
number.splice(2, 3);
console.log('s',number); // [0, 1, 2, 3, 4, 5, 6, undefined]

// 將要前面兩個是要刪除的區塊，後面是要曲代的資料
number.splice(2, 3, 7, 8);
console.log('A',number); // [0, 1, 7, 8, 5, 6, undefined]