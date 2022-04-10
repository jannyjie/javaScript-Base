// 原型： Array.prototype.join()
// 功能： 會將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串。
// 改變： 不會改變原陣列。
// 語法： arr.join([separator])
// 回傳值： 回傳一個合併所有陣列元素的字串。假如 arr.length 為 0，將回傳空字串。
// 參數： 分隔符號。

// join()會將陣列裡的所有元素轉成字串，並串接起來回傳一個結果字串。我們可以指定額外的字串，用來分隔每個字串中的元素，如果我們沒有給指定的分隔符號字串，join()就會用預設的逗號來當分隔符號。不只如此，join()還會把一些無效的元素，例如空元素、undefined 或 null 當作空字串來處理，並回傳回來。

// 沒給符號也可以跟有給一樣
// 我們先來看看join()怎麼用：

const arr = [1,2,3,4,5];
const arr2 = arr;
const arr3 = arr;

arr.join(','); // "1,2,3,4,5"
arr2.join() // "1,2,3,4,5"
arr3.join('') // "12345"

// 大家有沒發現，其實join()裡沒給分隔符號，和給分隔符號join(',')得到的結果是ㄧ樣的。
// 因為所有的符號都屬於字串，所以記得在給參數的符號時，也必須以「字串」的形式包覆，像是join(',')。

// 把陣列裡的字串元素轉成一整個字串
// 將陣列元素用固定符號串成字串，但是遇到參考型別的陣列元素join()會如何處理？
// 結果是join()會把它們都放生，阿不 而不處理這些參考型別的元素。但也不全然是這樣，看了下面的例子，join()只會將 object 的物件行元素放生，但對同是參考型別的陣列卻不會。

const arr = ['jack', 'john', 'may', 'su', 'Ada'];
const str = arr.join('、'); 
str; // "jack、john、may、su、Ada"

const arr2 = [[1,2], 'john', 'may', {a : 42}, 'Ada'];
const str2 = arr2.join(' ');
str2; // "1,2 john may [object Object] Ada"

// 如果可以活用，還真的很好用
// join()所執行的事剛好和split()的方法相反，split()會把字串切成片段來放在陣列裡，而join()則是會把所有元素併成一個陣列。

let str = "Hello word, how a bout your ?"

// 用 split() 轉成陣列
let word = str.split(' ');
word; // ["Hello", "word,", "how", "a", "bout", "your", "?"]

// 再用 join() 轉回字串
word.join();
word; // "Hello,word,,how,a,bout,your,?"

// 別忘了，如果字串裡有逗號，join()會把它當作是元素的一部分處理。

// join() 可以怎麼寫出來？
// 我們可以試著寫出一個原生的寫法：

Array.prototype.join2 = function (separator) {
    let result = this[0];
    for (let i = 1; i < this.length; i++){
      result += separator + this[i];
    }
    return result;
  }
  // 以上原生維修中，晚點再來補正確的，抱歉
  
  const arr = [1,2,3,4]
  arr.join(); // "1,2,3,4"
  arr.join('-'); // "1-2-3-4"
  arr.join(''); // "1234"
  
  const arr2 = ["hi", "wow","hello"];
  arr2.join(); // "hi,wow,hello";
  
  // 對於無效的元素，join()會置之不理，但是還是會把逗號留下來
  const arr3 = [null, 42, "hi", undefined];
  arr3.join(); // ",42,hi,"