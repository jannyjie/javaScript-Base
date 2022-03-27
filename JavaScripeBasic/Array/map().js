// 今天要介紹第三個資料結構 Map，此 Map 跟 Array.prototype.map 可是完全不一樣的東西! 千萬不要搞錯了。
// https://ithelp.ithome.com.tw/articles/10214746
// ES6 Map
let myMap = new Map();

var keyString = 'I am string',
    keyObj = {},
    keyFunc = function () {},
    keyNumber = 1

// 增加
myMap.set(keyString, 'string value');
myMap.set(keyObj, {
    obj: 1
});
myMap.set(keyFunc, function () {
    console.log('I am function')
});
myMap.set(keyNumber, 100);

// 有幾個
myMap.size; // 4

// 取值
myMap.get(keyObj); // {obj: 1}

// 看是否存在
myMap.has(keyString); //  true

// 刪掉
myMap.delete(keyNumber);
myMap.size; // 3

// 轉陣列
[...myMap.values()] // ["string value", {obj: 1}, ƒ]

// 當然你要一開始就把值存進去也可以。
// 更多 Map 方法可以看 MDN

// have value when define
let myMap = new Map([
    [keyString, 'string value'],
    [keyObj, {
        obj: 1
    }]
]);

// 我的做法就是當使用者勾選並改價錢就去記錄他的 id 跟 price。當然實際程式碼會判斷更多東西，我只是先簡單列出來

// 存修改哪個商品並把修改後價錢存起來
let tmpChagePrice = new Map();

tmpChagePrice.set(0, {
    "price": 200
})
tmpChagePrice.set(50, {
    "price": 99
})

// 儲存後 post API
let data = [];
tmpChagePrice.forEach((v, i) => {
    data.push({
        "id": i,
        "price": v.price
    })
})