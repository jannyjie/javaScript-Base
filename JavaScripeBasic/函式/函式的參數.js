// 傳值 " 基本型別 "  為 數值 字串 布林 符號 undefined null 
// 由於變數 a 的值為數值屬於基本型別, 因此 'change(a)' 是採取傳值呼叫, 表示變更的參數x的值, 而當作參數傳遞給函式的變數為a的值則不受影響,所以轉出的值都會是一樣的
function change(x){
    x = 100;
}

var a = 1;
window.alert(a); // 1

change(a);
window.alert(a); // 1 這時候

// 傳值為 " 物件型別 " 函式 陣列 物件
// 由於變數 a 為物件 與 參數 x 相同參照所以 除入就會變更x的 參數 

function change(x){
    x.score = 100;
}

var a = {score : 1 };
window.alert(a.score);

change(a);
window.alert(a.score);

// 預設參數
function trape(top, bottom, height = 5){
    var area = (top + bottom) * height / 2;
    window.alert('梯形面積為' + area);
}

trape(10, 20, ); // 75
trape(10, 20, 10); // 150

// 具名參數
function trape({top, bottom, height}){
    var area = (top + bottom) * height / 2;
    window.alert('梯形面積為' + area);
}

trape({height: 5, bottom: 20, top: 10}); // 75
trape({ bottom: 20, height: 5, top: 10}); // 75

// 其餘參數
function add(...number){
    var result = 0;
    for(let num of number){
        result += num;
    }
    return result;
}

window.alert(add(1, 2)); // 3
window.alert(add(1, 2, 3, 4, 5)); // 15

function add(...[x, y, z]){
    return x + y + z;
}

window.alert(add(1, 2)); // NaN
window.alert(add(1, 2, 3)); // 6
window.alert(add(1, 2, 3, 3)); // 6 只寫三個參數 就只會讀取三個 第四個會被忽略