// 如果要取得平均，我們必須加總所有數字和再除以數字的個數。步驟是：

// 取得陣列長度
// 加總數值
// 取得平均（數值總和 / 陣列長度）

let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);

let avg = sum / values.length;

console.log(avg)

/////$Recycle.Bin
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let count = values.length;
values = values.reduce((previous, current) => current += previous);
values /= count;

// 現在，如果要取得中間值的步驟：

// 將陣列排序
// 取得中間值的算術平均值

let values = [2, 56, 3, 41, 0, 4, 100, 23];

values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let median = (values[lowMiddle] + values[highMiddle]) / 2;


////$Recycle.Bin
let values = [2, 56, 3, 41, 0, 4, 100, 23];
values.sort((a, b) => a - b);
let median = (values[(values.length - 1) >> 1] + values[values.length >> 1]) / 2


///// function 
var arr = [1,2,3,4,5,6];
    //建立一個名為avg引數魏array的函式
var avg =  function (array) {
    //將array的長度賦給len
    var len = array.length;
    var sum = 0;
    //利用for迴圈遍歷陣列的內容，利用sum累加求和
    for(var i = 0; i < len ; i++){
        sum += array[i];
    }
//  返回陣列的和與長度求平均值
    return sum/len;
}
console.log(avg(arr));