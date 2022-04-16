var num = 255;

console.log(num.toString(2));
console.log(num.toString(16));
console.log(num.toString(36));

// 只要呼叫Number物件的 toString 方法時加上基數，就能夠求得n進位的數值。此基數介於2~36之間

// 可用來產生色票
var fontColor = [];
for(var i = 0; i < 17; i++){
    var f = i.toString(16);
    fontColor.push('#0' + f + '0');
}

console.log(fontColor)

// radix 參數是一個介於 2~36 的整數，用來指定基數，預設為 10。

var count = 10;

count.toString()  // '10'
(17).toString()   // '17'
(17.2).toString() // '17.2'

var x = 6;

x.toString(2)      // '110' 二進位表示法
(254).toString(16) // 'fe' 十六進位表示法

(-10).toString(2)   // '-1010'
(-0xff).toString(2) // '-11111111'