// 原型： Array.prototype.indexOf()
// 功能： 搜尋陣列中指定的值。
// 改變： 不會改變原陣列。
// 語法： arr.indexOf(searchElement[, fromIndex])
// 回傳值： 在陣列中找到的第一個元素索引值；沒找到則為 -1。
// 參數： 要找的元素、從哪裡開始找。

const arr = ["a", "b", "c", "D", "C", "b", "a"];

// 沒給參數，不知道我們要找的元素是什麼，回傳 -1 很合理。
arr.indexOf(); // -1
// 找到的 "c" 在索引值 2 的位置
arr.indexOf("c"); // 2
// 從索引值 2 的位置開始找，所以找到第二個 "b"
arr.indexOf("b", 2); // 5
// 從索引值 3 的位置開始找，會區分大小寫，找不到 "c" 回傳 -1
arr.indexOf("c", 3); // -1
// 第二參數預設就是 0 ，這裡有寫沒寫都ㄧ樣
arr.indexOf("c", 0); // 2
// 第二參數 -5 表示從後面數過來 -5 的位置開始找，所以找得到 "c"
arr.indexOf("c", -5); // 2
// 但是從 -5 開始找就找不到"c" 所以回傳 -1
arr.indexOf("c", -4); // -1

// 找出所有陣列裡指定的索引值
const arrs = ["a", "b", "c", "D", "C", "b", "a"];
function findAll(arr,element){
  const results = [];
  let len = arr.length;
  let fromIndex = 0;
  while(fromIndex < len){
    fromIndex = arr.indexOf(element, fromIndex);
    if(fromIndex === -1) break; // 沒找到完成搜尋
    results.push(fromIndex); // 將找到的索引值放入陣列
    fromIndex = fromIndex + 1;
  }
  return results;
}

let result = findAll(arrs,"b")
console.log(result); // [1, 5]