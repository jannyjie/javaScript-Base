// 如何正確實作 JavaScript Array Random Shuffle 亂數排序演算法

sort();

// 先前情提要一下 JavaScript 內建的 sort() 函數。

// Array.prototype.sort() 接受一個「比較函數」作為參數，這個函式的用途是讓 JavaScript engine 知道 array裡面的物件的大小關係，如此一來 JavaScript engine才能夠排序。

// 這個「比較函式」的輸入參數 (a, b) 是 array 裡的任兩個要比較的項目，回傳值是一個數字，負數表示a比b小，正數表示a比b大，相等表示一樣大。

// 總之，如果我們想要排序一個「數字」的 array，最簡潔的寫法如下：

array.sort((a, b) => (a - b));

// 神奇的 JavaScript 亂數排序演算法

//網路上看到 JavaScript 有一種很簡潔的寫法，可以將一個array作亂數排序 (random shuffle)：
function sort(array) {
    array.sort(() => Math.random() - 0.5);
}

// 太簡潔了吧！但是原理到底是什麼？
// 就讓我們一起來看一下這段 code 有什麼作用吧！
// 首先，Math.random() 會回傳一個介於0 ~ 1的數字，
// 那麼，Math.random() - 0.5 自然就會回傳一個介於-0.5 ~ +0.5的數字。
// 如果排序時，給定任兩個數字(a, b)，隨機回傳一個介於-0.5 ~ +0.5的數值，表示任兩個數字之間的大小相對關係是隨機的。
// 所以排序完的結果也是隨機的。
// 個人覺得是非常有趣 (?) 的思路，代碼行數又短，乍看是個滿優雅的寫法。
// 不過繼續往下看，會發現一件有趣的事情：