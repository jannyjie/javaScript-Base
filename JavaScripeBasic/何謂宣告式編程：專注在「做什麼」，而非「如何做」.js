// 何謂宣告式編程：專注在「做什麼」，而非「如何做」
// 在正式介紹這些好用的方法之前，我們先來深入剖析平常處理陣列資料的方法。

// 假設我們有一組商品資料：
const data = [
    {
      name: '蘋果',
      price: 100,
    }, {
      name: '香蕉',
      price: 200,
    }, {
      name: '橘子',
      price: 300,
    },
];

// 我們可以對這組資料做各式各樣的操作。

// 舉例來說，如果我想要所有品項「價格」的陣列，可以這樣寫：

const result = [];
for(let i = 0; i < data.length; i++){
    result.push(data[i].price);
}

console.log(result);


// 注意到上面兩段程式碼有共同的模式，也就是：

// 新增一個空陣列
// 用一個 for 迴圈遍歷陣列
// 經過某種計算後將結果放進陣列中
// 這些重複使用的邏輯，可以提取成一個新的陣列方法 map()：

Array.prototype.map = function(callback) {
    const results = [];
    for (let i = 0; i < this.length; ++i) {
      results.push(callback(this[i]));
    }
    return results;
 }

 // 於是上述兩個例子可以用 map() 重新改寫如下：

const result1 = data.map(item => item.price);
const result2 = data.map(item => item.price * 0.9 + 30);