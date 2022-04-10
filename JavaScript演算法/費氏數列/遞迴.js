// https://chupai.github.io/posts/2008/alg_recursion/#1-%E7%B4%AF%E5%8A%A0
// 簡單範例
// 一個基本的遞迴函式一定要有：

// 終止條件（基本條件）
// 遞迴條件（呼叫自己的條件）
// 如果沒有終止條件，就會無限循環直到當掉。

// 1. 累加
// 假設輸入一個正整數 n，求 1 + 2 + … + n 的總和。

// 最簡單的方式，就是用迭代的方式（迴圈），將所有數字累加再一起：
function sum(n) {
    let result = 0;
    if (isNaN(n)) {
        return 'Not a Number!';
      }
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
}

// 這個問題可以寫成 S(n) = n + n - 1 + … + 1S(n)=n+n−1+…+1，也就是

// S(1) = 1S(1)=1（基本條件）
// 對所有大於 1 的整數：S(n) = n + S(n - 1)S(n)=n+S(n−1)（遞迴定義）
// 使用遞迴的方式：
function sum(n) {
    if (isNaN(n)) {
      return 'Not a Number!';
    }
    if (n === 1) {
      return 1;
    }
    return n + sum(n - 1);
  }
  console.log(sum())

//   2. 階乘
//   另一個更常見的範例就是正整數的階乘（factorial）。
  
//   定義：
  
//   0! = 10!=1
//   n! = 1 \times 2 \times 3 …(n - 2) \times (n - 1) \times nn!=1×2×3…(n−2)×(n−1)×n
//   n! = n \times(n - 1)!n!=n×(n−1)!
function factorial(n) {
    if (isNaN(n)) {
        return 'Not a Number!';
    }
    if (n === 0) {return 1;}
    return n * factorial(n - 1);
}
  
console.log(factorial())

// 3. 費氏數列
// 上面提到的費氏數列：
function fibonacci(n) {
    if (isNaN(n)) {
          return 'Not a Number!';
      }
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
  
console.log(fibonacci(10))
