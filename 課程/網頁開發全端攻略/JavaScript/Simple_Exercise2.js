// // 編寫一個名為“stars”的函數，它按以下模式打印出星星層：
function stars(arr) {
    let line = []
    for (var i = 1; i <= arr; i++) {
        let sum = '';
        for (var j = 0; j < i; j++) {
            sum += '*'
        }
        line.push(sum)
    }
    return line
}




console.log(stars(1));
console.log('-------------------');
console.log(stars(4));
console.log('-------------------');
console.log(stars(10));
// // . 編寫一個名為“makeStars”的函數，它按以下模式打印出星星：
// （如果您使用的是代碼運行器、node.js 或 Web 開發人員的工具，makeStars 函數的結果將看起來與練習 1 星完全相同。這是 100% 好的。我將這個練習放在這裡的原因是， 許多處理文件的編程語言會要求您編寫這樣的代碼。）
function makeStars(arr) {
    let line = '*'
    for (var i = 2; i <= arr; i++) {
        let s = '\n';
        for (var j = 0; j < i; j++) {
            s += '*'
        }
        line += s;
    }
    return line
}




console.log(makeStars(1));
console.log('-------------------');
console.log(makeStars(4));
console.log('-------------------');
console.log(makeStars(10));
// 編寫一個名為“stars2”的函數，它按以下模式打印出星星層：
function stars2(arr) {
    for (var i = 1; i <= arr; i++) {
        let sum = '';
        for (var j = 0; j < i; j++) {
            sum += '*'
        }
        console.log(sum)
    }
    for (var i = arr - 1; i > 0; i--) {
        let sum = '';
        for (var j = 0; j < i; j++) {
            sum += '*'
        }
        console.log(sum)
    }
}
stars2(1)
console.log('-------------------');
stars2(4)

// 編寫一個名為“table”的函數，它接受一個輸入 n，並打印出 n x 1 到 n x 9
function table(n) {
    for (var i = 1; i <= 9; i++) {
        console.log(n + '*' + i + '=' + n * i)
    }
}

// table(1)
// 編寫一個名為“table9to9”的函數，打印出乘法表：
function table9to9(n) {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            console.log(i + '*' + j + '=' + i * j)
        }
    }
}

table9to9()

// . 編寫一個名為“fib”的函數，它以整數 $n$ 作為輸入，並返回斐波那契數列的第 $n$ 個元素。
//      如果您從未聽說過斐波那契數列，請閱讀以下內容：
// 遞迴
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fib(i))
}


// 方法二
function fib(n) {
    let arr = [0, 1];
    let i = 0;
    while (arr.length <= n) {
        arr.push(arr[i] + arr[i + 1]);
        i++
    }
    console.log(arr)
    console.log(arr[n])
}
fib(8)

// 編寫一個名為“reverse”的函數，將字符串作為輸入，並返回反向字符串。
function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverse("abcd"))
// 編寫一個名為“swap”的函數，它將一個字符串作為輸入，並返回一個小寫變為大寫，大寫變為小寫的新字符串。
function swap(str) {
    let result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(swap("Aloha")); // swap("Love you.")
console.log(swap("Love you.")); // "lOVE YOU."
// 編寫一個名為“findMin”的函數，它將一個數組作為輸入，並返回輸入數組中的最小元素。
function finMin(arr) {
    let min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min)
    return min;
}

finMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
finMin([]); // returns undefined
finMin([1, 6, 0, 33, 44, 88, -10]); // returns -10
// 編寫一個名為“findNthMin”的函數，它接受一個整數數組和另一個整數 n，並返回給定數組中第 n 個最小的數。
function findNthMin(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] < arr[i]) {
                counter++;
            }
        }
        if (counter == n - 1) {
            return arr[i];
        }
    }
}

console.log(findNthMin([1, 2, 3, 4, 5], 1));
console.log(findNthMin([1, 3, 5, 7, 9], 3));