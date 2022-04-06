var reverse = function(x) {
    var resultArr = [];
    var intToStr = x.toString();
    for(var i = intToStr.length-1;i > 0;i--){
        resultArr.push(intToStr[i]);
    }
    if(intToStr[0] == "-"){
        resultArr.unshift("-");
    }
    resultArr.push(intToStr[0]);
    var resultNum = parseInt(resultArr.join(""));
    if(resultNum <= Math.pow(-2,31) || resultNum >= Math.pow(2,31) - 1 ){
        return 0;
    }
    return resultNum;
 
 };
 
 console.log(reverse(987654321))

// 二
var reverse = function(x) {
    let result = parseInt(x.toString().split("").reverse().join(""));
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
            return 0;
    }
    if(x < 0){
        result = -result;
    }
    return result;
}
console.log(reverse(987654321))
// 1.parseInt() 函数可解析一个字符串，并返回一个整数。
// 2.toString() 方法用于返回以一个字符串表示的 Number 对象值。
// 3.split() 方法用于把一个字符串分割成字符串数组。""里面的值为以其为分割线
// 4.reverse() 方法反转数组中元素的顺序。
// 5.join() 方法将数组作为字符串返回。""里面的值为以其为分隔符
// 6.需要判断当x<0时，result变为-result

// 三

var reverse = function(x) {
    var result = 0;
    while(x != 0){
        var a = x % 10;
        x = parseInt(x / 10);
        result = result * 10 + a;
        if(result < Math.pow(-2,31) || result > Math.pow(2,31) - 1){
            return 0;
        }
    }
    return result;

};
console.log(reverse(987654321))
// x = parseInt(x / 10) 也可以更改为 x = ~~(x / 10) 

// ~~为取整的意思，js 与 java 不同在于 result 的数据类型不同