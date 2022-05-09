// 編寫一個名為“printMany”的函數，打印出整數 1、2、3、...、100。
function printMany() {
    for (var i = 1; i <= 100; i++) {
        console.log(i)
    }
}

printMany();


// 編寫一個名為“printEvery3”的函數，它打印出整數 1、4、7、10、...、88。
function printEvery3() {
    //     for(var i =1; i <= 88; i+=3){
    //         console.log(i)
    //     }

    var i = 1;
    while (i <= 88) {
        console.log(i);
        i += 3
    }
}

printEvery3();


// 編寫一個名為“stars”的函數，它接受一個整數作為輸入，並返回 n 個連續“*”的串聯。

function stars(n) {
    var result = '';
    for (var i = 0; i <= n; i++) {
        result += "*";
    }
    return result
}

console.log(stars(10))

// 編寫一個名為“isUpperCase”的函數來檢查字符串的第一個字母是否為大寫。

// function isUpperCase(n) {
//     if (n.length == 0) return false;
//     if (n[0] == n[0].toUpperCase()) {
//         return true
//     } else {
//         return false
//     }
// }
function isUpperCase(n) {
    if (n.length == 0) return false;
    return n[0] == n[0].toUpperCase();
}
console.log(isUpperCase("ABCD")); // returns true
isUpperCase(""); // returns false
isUpperCase("aBCD"); // returns false


// 編寫一個名為“isAllUpperCase”的函數來檢查給定字符串中的所有字母是否都是大寫的。

function isUpperCase(n) {
    if (n.length == 0) return false;
    let aa = true;
    for (var i = 0; i < n.length; i++) {
        if (n[i] != n[i].toUpperCase()) {
            aa = false;
        }
    }

    return aa;
}

console.log(isUpperCase("AeBCD")); // returns true
isUpperCase(""); // returns false
isUpperCase("aBCD"); // returns false


// 編寫一個名為“位置”的函數，打印出第一個大寫字母及其索引位置。 如果未找到，則打印 -1。3

function position(n) {
    if (n.length == 0) return false;
    let aa = true;
    for (var i = 0; i < n.length; i++) {
        if (n[i] == n[i].toUpperCase()) {
            return n[i] + '' + i;
        }
    }

    return -1;
}

console.log(position("abcd")); // prints -1
console.log(position("AbcD")); // prints A 0
console.log(position("abCD")); // prints C 2


// 編寫一個名為“findSmallCount”的函數，它將一個整數數組和一個整數作為輸入，並返回一個整數，表示數組中有多少元素小於輸入整數。
function findSmallCount(arr, n) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            sum++;
        }
    }

    return sum;
}

console.log(findSmallCount([1, 2, 3], 2)); // prints 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // prints A 0

// 編寫一個名為“findSmallerTotal”的函數，它將一個整數數組和一個整數作為輸入，並返回數組中小於輸入整數的所有元素的總和。
function findSmallerTotal(arr, n) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            sum += arr[i]
        }
    }

    return sum;
}

console.log(findSmallerTotal([1, 2, 3], 3)); // prints 3
console.log(findSmallerTotal([1, 2, 3], 1)); // prints 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // prints 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // prints 0
// 編寫一個名為“findAllSmall”的函數，它將一個整數數組和另一個整數作為輸入，並返回一個整數數組，其中包含所有小於輸入整數的元素。
function findAllSmall(arr, n) {
    let sum = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            sum.push(arr[i]);
        }
    }

    return sum;
}

console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]
// 編寫一個名為“sum”的函數，它接受一個數字數組，並返回輸入數組中所有元素的總和。

function sum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum;
}


console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns [1, 2, 3]
console.log(sum([])); // returns [1]
console.log(sum([-10, -20, -30])); // returns [1, 3, 2]