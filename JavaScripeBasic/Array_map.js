// 會透過函式內所回傳的值組合成一個新的陣列
// 並不會改變原陣列
// 回傳數量會等於原始陣列的長度
// 如果不回傳則是 undefined

// 簡單來說就是我們若用陣列使用 map() 方法呼叫函式的話，就可以讓陣列中每個元素執行完該函式後，將每個元素的執行結果回傳到一個新的陣列, 但不會引響原本的陣列。

{/* <div id="root"></div>  */}

var el = document.getElementById('root');

var add = [2, 5, 6,8,9,10];

var array = add.map((val, index) => {
    return {id: index, number: val * val / 2};
})

// JSON.stringify()方法將 JavaScript 值轉換為 JSON 字符串，如果指定了替換函數，則可選地替換值，或者如果指定了替換器數組，則可選地僅包括指定的屬性。

el.innerHTML = JSON.stringify(array);

console.log(array);