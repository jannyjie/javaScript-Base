// Spread_Operators_and_res_parameter_運算符號

// res parameter  可以放置任意數量
// 這兩個結論都一樣 唯一不同的是 checkBiggest 無法放置任意數量  如果 要放置任意數量 須將arr 改成 ...arr
console.log(Math.max(-2, 6, 100)); // 100

function checkBiggest(arr){
    let biggest = -Infinity;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i]
        }
    }
    return biggest
}

console.log(checkBiggest([-2, 6, 100])); // 100

function checkBiggestA(...arr){
    let biggest = -Infinity;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i]
        }
    }
    return biggest
}

console.log(checkBiggestA(-2, 6, 100)); // 100
