// 編寫一個名為“mySort”的函數，它將整數數組作為輸入，並返回輸入數組的排序版本。
function finMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


function mySort(arr) {
    let result = [];
    while (arr.length > 0) {
        let min = finMin(arr);
        result.push(min);
        arr.splice(arr.indexOf(min), 1);
    }
    return result;
}

console.log(mySort([17, 0, -3, 2, 1, 0.5]))

// 編寫一個名為“isPrime”的函數，它接受一個整數作為輸入，並返回一個布爾值，指示輸入數字是否為素數。
function isPrime(n) {
    if (n == 1) return false;

    let starter = 2;
    while (starter < n) {
        if (n % starter == 0) {
            return false;
        }
        starter++
    }
    return true;
}

console.log(isPrime(5)) //true
console.log(isPrime(1)) // false
// 編寫一個名為“confirmEnding”的函數，它將 2 個字符串作為輸入，並返回一個布爾值，該值指示第一個輸入是否以第二個輸入結束。
function confirmEnding(str1, str2) {
    let k = str1.length - 1;
    for (let i = str2.length - 1; i >= 0; i--) {
        if (str2[i] != str1[k]) {
            console.log(false)
            return false;
        } else {
            k--;
        }
    }
    console.log(true)
    return true;
}
confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); // false
confirmEnding("Open sesame", "same"); // true
// 編寫一個名為“findDuplicate”的函數，將整數數組作為輸入，並檢查數組中是否有任何重複值。
function findDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] == arr[j]) {
                console.log(true);
                return true
            }
        }
    }
    console.log(false)
    return false;
}

findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
findDuplicate([]); // returns false
findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false 
// 編寫一個名為“palindrome”的函數，用於檢查輸入字符串是否為回文。 （如果您不知道回文是什麼，請在谷歌上搜索。）
function palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            console.log(false);
            return false;
        }
        i++;
:>dldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldl'[K; JLNHBUGVCFGXDZL.P/=;[]-
// K' .NVC。；]
    }
    console.log(true);
    return true;
}

palindrome("bearaeb"); // true
palindrome("Whatever revetahW"); // true
palindrome("Aloha, how are you today?"); // false
// 編寫一個名為“pyramid”的函數，它接受一個整數作為輸入，並按以下模式打印一個金字塔：

// 編寫一個名為“inversePyramid”的函數，將金字塔倒置。[  
