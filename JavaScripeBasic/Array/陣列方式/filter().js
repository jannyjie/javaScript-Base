// 原型： Array.prototype.filter()
// 功能： 將經指定的函式運算後，由原陣列中通過該函式檢驗的元素回傳一個新陣列。
// 改變： 不會改變元陣列。
// 語法： var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
// 回傳值： 回傳新陣列，原陣列不改變
// 參數： callback 函式、thisArg，第二參數可忽略。

// 透過filter()函式的第一參數：callback 函式所指定的過濾條件，返回一個新陣列 (非常好用)。例如我們只想保留陣列裡，字串長度大於三的字串元素，可以輕易地取得。
let arr = ['Jack', 'John', 'May', 'Su', 'Ada'];
let arr2 = arr.filter(function(value) {
  return value.length > 3;
});
arr2.join('、'); //  Jack、John

// 我們也可以用它搭配可去掉空字串的字串方法trim()，再將陣列沒用或空的元素刪除，就可得到一個新的、乾淨的陣列。

let arra = ['Hello', '', 'Hi', null, undefined, 'Ciao', ' '];

let newArr = arra.filter(function (inutile) {
 return inutile && inutile.trim(); 
});

newArr; // ['Hello', 'Hi', 'Ciao']

// filter()好用的原因，除了可以產生一個新陣列，且不會更動到原本的陣列，對於沒有值的元素也不會起作用。而filter()和splice()的不同點，正是filter()不會更動到原陣列。

// 在filter()的第一個參數所帶入的 callback 函式，可以帶入多個參數，如果我們只帶入一個參數，這個參數即表示是使用filter()此陣列的元素，而第二與第三個參數則代表元素的索引位置和陣列本身。例如下面這個例子，我們想要過濾出來，大於 5 的元素：
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let filtered = array.filter(function(value, index, arr){
    return value > 5;
});

filtered; // [6, 7, 8, 9]
array; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// 利用filter()，我們也可以輕鬆地去除陣列裡重複的元素，可以達到這樣的效果是因為使用indexOf()會回傳第一個元素位置的（index），如果之後有重複元素的位置與indexOf()回傳的位置不相等，就會被filter()過濾掉。而這時的過濾結果，只會先保留第一個找到的元素，第二個重複的元素就不會被放進回傳的陣列裡了。

let arr = ['B', 'A', 'E', 'C', 'A', 'F', 'G', 'E'];

let newArr = arr.filter(function (element, index, self) {
 return self.indexOf(element) === index;
});

newArr; // ["B", "A", "E", "C", "F", "G"]

// 1.學會了filter（）的使用，就可以直接使用es6中的輪子了，首先實現過濾出陣列中大於5的數
var arr =[1,2,3,,5,6,7]
var myarr=arr.filter(v=>v>5)
console.log(myarr);//輸出[6,7]

// 2.通過filter判斷陣列中是否存在某個值
var arr=[1,2,3,,5,6,7]
console.log(arr.filter(v=>v==5).length==0?"不存在":"存在")//輸出存在

// 3.去掉空陣列空字串、undefined、null
var arr = ["",undefined,null,1,2,3]
var myarr = arr.filter(v=>v)
console.log(myarr)//輸出[1,2,3]

// 4.陣列去重
var arr = [1, 2, 2, 3, 4, 5, 5,6,,7];
var myarr = arr.filter((item, index,self)=>self.indexOf(item)===index) 
console.log(myarr); //[1,2,3,4,5,6,7]