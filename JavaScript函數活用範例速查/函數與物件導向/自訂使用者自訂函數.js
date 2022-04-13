// 要定義使用者自訂函數，大致可分成三總方式
// 1. function 命令
// 2. Function 建構式
// 3. 函數語法

// function 命令
function getSquareArea(width, height){
        // 函數名稱    加參數
    return width * height;
}

// Function 建構式
var getSquareArea = new Function(
    'width', 'height', 'return width * height'
);

// 函數語法
var getSquareArea = function(width, height){return width * height;};

console.log(getSquareArea(2,3));

// 函數名稱建議式利用"動詞+名詞"

// 函數語法與 function 建構式的有效範圍

var scope = '全域';

function hoge(){
    var scope = '區域';

    var literalFnc = function() {return scope;};
    console.log(literalFnc());

    var conFnc = new Function('return scope;');
    console.log(conFnc());
}

