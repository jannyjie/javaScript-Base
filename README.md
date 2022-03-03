# javaScript-008
## javaScript的起源與基礎(上)
### 基礎知識與資料型別
#### 判斷型別的方式typeof
```javascript=
typeof true   // 'boolean'
typeof 'qqq'  // 'string'
typeof 123    // number
typeof {}     // 'object' 大括弧
typeof []     // 'object' 中括弧
```
但也有例外
```javascript=
typeof window.alert  // 'function'
typeof null          // 'object'
```
#### string 字串
字串會用一組'' (單引號) 或 "" (雙引號)包夾住, 兩者不能混用

```javascript=
var str = 'Let's go!' // 會出錯!!
var str = "Let's go!" // OK
```
如果非用不可可以透過 \ (跳脫字元, escape character) 來

```javascript=
var str = 'Let\'s go!' // OK
```

如果遇到多組的可以用 + (加號)來連接 :

```javascript=
var str = 'Hello' + 'World';  // OK
```

甚至是多行字串時, 可以透過\(反斜線)來連接 :

```javascript=
var str = 'Hello \ 
Hello \
Hello';  // OK

var str = `Hello \ 
Hello \
Hello`;  // OK
```
#### 樣板字面值
由一般一串與 $ {} 所組成

##### 允許將變數直接砍入字串
```javascript=
var str = '30';
var age = 'I am a' + str + 'year-old engineer.';

consle.log(age);
// I am a  30 year-old engineer.
```
也可以改成
```javascript=
var str = '30';
var age = `I am a ${str} year-old engineer.`;

consle.log(age);
// I am a  30 year-old engineer.
```
甚至想要內崁運算式也是可以
```javascript=
var a = 5;
var b = 10;
console.log(`Fifteen is ${a+b} and not ${2*a+b}.`);
// Fifteen is 15 and not 20.
```
#### number 數字
除了常見的整數與小數點一類的數字外, 另外還有幾種特殊的數字: Infinty(無限大) \ -Infinty(負無限大), 以及NaN(不是數值, Not a Number)
NaN與任何數字作數學運算, 結果都是NaN 也就是說NaN 並不等於任何數字甚至自己
NaN就字面上來說它並不是一個數字但你用typeof(NaN)判斷型態它又是number

number實作基於[IEEE 754] 二進位浮點數算數標準所以當你執行 0.5 + 0.9 === 1.4 的時候會得到false 
但可以用 es6 提供的最小精度值
```javascript=
console.log(Math.abs(0.1+0.2-0.3) <= Number.EPSILON); // true

```
#### boolean 布林值
boolean 布林值 值有 true / false
#### null / undefined
雖然這兩種值套過 Boolean() 強制轉型成 boolean 時, 都會代表 false 的意思但還是有區別
> undefined : 此變數還沒給值所以不知道是什麼
> null : 此變數可曾經有值也可能沒有 但現在是沒有的

如果強制透過 Number() 強制為兩者轉型是什麼
```javascript=
Number( null ); // 0
Number( undefined ); // NaN
```

// 在非全域的作用範圍下undefined允許被當成變數名稱使用 但完全不建議這樣做

### 物件 陣列以及型別的判斷
#### 物件 object
目前最常見的作法
```javascript=
var person = {
    name: 'Kuro',
    job: 'Front-end developer',
    sayName: function() {
        alert(this.name);
    }
};
```
這種建立物件的方式稱為  物件實字同時也是JSON 格是的核心語法
##### 物件數姓存取
```javascript=
var person = {
    name: 'Kuro',
    job: 'Front-end developer',
    sayName: function() {
        alert(this.name);
    }
};

person.name    // 可透過 . 
person["name"] // 或是 [""] 達到一樣的效果
```

如果ket 值是 '' 的話 要[""] 方式抓取值
```javascript=
var person = {
    'name': 'Kuro',
};

person["name"]
```

##### 屬性增加
```javascript=
var person = {};
person.name = 'Object';
```

##### 屬性刪除 用 delete
```javascript=
var person = {};
person.name = 'Object';

delete person.name;
person.name; // 刪除後會變成  undefined
```
##### 判斷屬性是否存在
```javascript=
var person = {};
console.log(person.name); // undefined
```
但也可以運用 in 運算子 與 hasOwnProperty() 方法
```javascript=
var person = {
    name: 'janny',
};

// 透過 in 檢查屬性
console.log('name' in person); // true
console.log('jj' in person);   // false

// 透過 hasOwnProperty() 檢查屬性
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('jj'));   // false
```
雖然兩者都會檢查屬性但hasOwnProperty()方法不會往上查物件的原形只會檢查物件本身是否存在
但in運算子則會順者物件原形鏈上檢查 :

### Array 陣列
陣列是個有 " 順序性的集合 " 所以只能透過 [] 加上索引來存取但與物件一樣建立陣列也可以透過new關鍵字來建立

> 增減 pop() / shift() / unshift()

### 如何判斷是否為陣列

```javascript=
Array.isArray([]);   // true
Array.isArray([1]);  // true
Array.isArray(new Array()); // true

Array.isArray();       // false
Array.isArray({});     // false
Array.isArray(null);  // false
Array.isArray(undefined);  // false
```
### 運算式與運算子
> 敘式句 : 執行某個動作像是變數的宣告 賦值 迴圈和 if 判斷式等等都可以被歸類於此
> 運算式 : 就是產一個值 'var a = 10 * 10;'
運算式的 四則運算 加 減 乘 除 都屬於運算子的一種

#### 比較運算子
比較後得到 ture / false

> 相等 == 全等 ===
> 不等於 != !== : != 會自動轉型 反之 不會

## javaScript的起源與基礎(下)
### 自動轉型的規則
前面有提到在兩個等號 == 的比較運算式下
> 其中一個為 Boolean 的情況下會將 true 轉型為 數字 再進行比較
> 如果遇到字串與數字做比較的情況下 則會將字串透過 Number() 嘗試轉型為數字後在進行比較
> 如果其中一方是物件的情況下而另一方是基本型則會透過物件的 valueOf() 方法取得對應的基本型別的值進行比較

當兩個物件進行比較時要看兩者是否指向同一個 實體 只要在指向同一個實體時才會回傳 true

### 數值的大於 > 小於 < 大於等於 >= 小於等於 <=
> 兩者都是單純數字 則就是字面大小比較
> 如果其中一個是數字而另一個不是 則需要將另一個轉為數字才能做比較
> 如果兩個都是字串則會依照字母順序進行比較
> 如果其中一個是 boolean 的情況則會把 true 看成 1 false 看成 0 在進行比較
> 如果是物件的情況下則會先透過物件的 valueOf() 方法 先求得對應的數值若物件沒有 valueOf() 方法的話 則會透過 toString() 轉型在進行比較

### 指派運算子
```javascript=
// 運算子      // 實際行為
 a += b        a = a + b
 a -=b         a = a - b
 a *= b        a = a * b
 a /= b        a = a / b
 a %= b        a = a % b
 ```

 ### 邏輯運算子
 
 ```javascript=
var a = 123;
var b = "abc";
var c = null;

console.log(a && b);  // "abc"
console.log(a || b);  // 123
console.log( c && a );// null
console.log(c || b); // "abc"
console.log(c || a); // 123
 ```
 一般來說應該會得到 boolean 的值 不是 true 就是 false 
但在解說前先說明一下 : 

> " AND && " : 比較 左邊 && 右邊 的值 當左右值相同則會回傳 true 若不是則會是 false
> " OR || "  : 左邊 || 右邊 只要符合其中一個值則會回傳 true 若不是則會是 false
> " NOT ! "  :  以一個驚嘆號來表示原本是 true 結果經過轉換後會到 false 而 false 會變成 true  所以很多人會用 !!XXX 來取代 Boolean(XXX) 透過兩次的 NOT 操作即可以判斷某數值 Boolean轉換的結果

但嚴格來說只有 NOT! 運算子才會回傳 true 或 false

你可能會說可是我在 if 條件式裡面帶入
 ```javascript=
if(a || b) {
    ....
}

if(a && b ) {
    ...
}
 ```
 這類的是可以正常執行的

 在 JavaScript 這門程式當中我們可以分成兩種 值
 > 那些經過ToBoolean 轉換後得的 false 值
 > 以及其他的值通常最後都會變成 true

 ### 轉換為空值的
 > undefined
 > Null
 > +0 -0 or NaN
 > 空字串"" 或 ''
 
 除了上面的值其他 Boolean("111") 會是 true

 #### 制轉型 - ToBoolean、Falsy、Truthy

##### Falsy 值
這邊再整理一次增加 BigInt 的版本，所以以後就是五項 8 個 Falsy 值

> ''
> +0、-0、NaN ( 無效的數字 )
> null、undefined
> false
> 0n

##### Falsy 物件
Table 10 指出所有物件都是 truthy，那如果包裹一個 falsy 的物件包裹器轉成 Boolean 會是什麼呢 🤔
 ```javascript=
let a = new Boolean(false);

    let b = new Number(0);

    let c = new String('');

    false、0、'' 基本型別值強制轉型都會是 false

    typeof a; // object

    Boolean({}); // true

    Boolean(a); // true

    Boolean( a && b && c ); // true
 ```
 ##### Truthy 值
 javaScript 沒有真正定義一個 truthy 值清單，所以除了五項 8 個 falsy 值之外的，全部都是 truthy 值
 ```javascript=
    let a = 'false';

    let b = '0';

    let c = '""';

    let d = Boolean ( a && b && c );

    d; // true

    a b c 皆為 string 值，所以都是 truthy

    注意 c 是包含 "" 的字串，所以會是 true

    ------------------------------------------

    How about these?

    let e = [];

    let f = {};

    let g = function(){};

    let h = Boolean ( e && f && g );

    h; // true

    因為 []、{}、function(){} 這三個都沒有出現在五項 8 個 falsy 清單，不過也因為它們是 Object 根據 Table 10 皆為 true
 ```

另外 && || 所產生的值不一定會是 Boolean 而是 兩者其一 在判斷前須對左邊數值進行檢查
> 如果是 Boolean 類型就做 ToBoolean 判斷是 falsy 或是 truthy 來轉換成對應的true OR false
> 對 || 運算子來說若第一個數值傳換為 true 則回傳第一個數值否則回傳第二個數值
> 對 && 運算子來說若第一個數值傳換為 true 則回傳第一個數值否則回傳第二個數值

所以在 if 條件式判斷中 JavaScript 會針對回傳後的數值再度做 ToBoolean 判斷是 Falsy 或 truthy 這也就是為什麼在 && OR || 的結果可以當作 true 與 false 的 判斷

 ```javascript=
console.log(!!'false' == !!'true'); // true
console.log(!!'false' === !!'true'); // true
 ```
### 流程判斷與迴圈
#### 條件語法 (1) : if...else
```javascript=
if(條件式){
    
}else{

}
 ```
 ```javascript=
if(條件式){
    
}else if{

}else if{

}else{

}
 ```
 #### 條件語法 (2) : switch
```javascript=
switch(){
    case :
      break;
    
    case :
      break;

    default:
      break;
}
 ```
```javascript=
var month = 1;
switch(Math.ceil(month/3)){
    case 1:
      console.log('春天');
      break;
    
    case 2:
      console.log('夏天');
      break;

    case 3:
      console.log('秋天');
      break;

    case 4:
      console.log('冬天');
      break;

    default:
      console.log('月份錯誤');
      break;
}
 ```
#### 條件語法 (3) :  三元運算子
```javascript=
(條件) ? [數值/運算子(1)] : [數值/運算子(2)];
 ```
 如果 條件為 true 此時回傳數值 1 否則回傳數值 2

過去會用 if...else

 ```javascript=
if(age >= 18){
    status = '成人';
} else {
    status = '小孩';
}
 ```

轉換成 三元運算子

 ```javascript=
var status = (age >= 18) ? '成人' : '小孩';
 ```

 #### 條件語法 (3) :  for 迴圈

一個簡單的for迴圈 ↓ 
```javascript=
var i;

for (i = 0; i < 10; i++){
    // 某件事
    console.log(i);
}
 ```

#### break 與 continue
> break 會直接跳離會圈
> continue 會跳過一次然後繼續下一次迴圈

所以假設如果要跳離3 的倍數
```javascript=
for (var i = 1; i < 10; i++){
    
    if( i % 3 === 0){
        continue;
    }

    console.log(i);
}
 ```

 ```javascript=
var arr = [0, 0, 0, 7, 0, 9, 0, 4, 8, 0];

for (var i = 0; i < arr.length; i++){
    
    if( arr[i] !== 0){
      console.log(arr[i]);
      break;
    }  
}
 ```
#### 函式宣告
 ```javascript=
function 名稱([參數1, 參數2, ...]) {
    // 做某事
}
 ```
就像是 ↓
 ```javascript=
function square(number) {
    return number*number;
}
 ```

#### 函式運算式
 ```javascript=
var square = function square(number) {
    return number*number;
}
 ```
#### 透過 new function 關鍵字建立函式
 ```javascript=
 var square = new Function('number', 'return number*number');
 ```

## 前端工程師的主戰場: 瀏覽器裡的 JavaScript(上)
### DOM BOM 的區別
> BOM : JavaScript 與 瀏覽器 溝通窗口不涉及網頁內容
> DOM : JavaScript 用來控制 網頁 的節點與內容的標準

想透過 DOM API 來取得節點 透過 JavaScript 可以這樣寫 : 
```javascript=
// 根據傳入的值找到 DOM id 中 為 'XXX' 的 元素;
document.getElemenById('xxxx');

// 針對給定的 tag 名稱, 回傳所有符合條件的 NodeList 物件
document.getElementsByTagName('xxxx');

// 針對給定的 class 名稱, 回傳所有符合條件的 NodeList 物件
document.getElementsByClassName('xxxx');

// 針對給定的 Selector 條件, 回傳第一個 或 所有符合條件的 NodeList 物件
document.querySelector('xxxx');
document.querySelectorAll('xxxx');
```

### BOM 的 核心是window 物件
而window 物件主要提供的屬性為 document / location / navigator / screen / history / frames
### DOM 節點的類型


| 常數名稱 | 值 | 說明 |
| -------- | -------- | -------- |
| Node.ELEMENT_NODE     | 1     | 表示 HTML 元素 (Element) 節點，像是 <p> 或 <div>     |
| Node.TEXT_NODE     | 3     | 表示文字 (Text) 或屬性 (Attr) 節點     |
| Node.COMMENT_NODE     | 8     | 表示註解節點 (Comment)     |
| Node.DOCUMENT_NODE     | 9     | 表示根節點 (Document)     |
| Node.DOCUMENT_TYPE_NODE     | 10     | 表示 DocumentType 節點，像是 <!DOCTYPE html>     |
| Node.DOCUMENT_FRAGMENT_NODE     | 11     | 表示 DocumentFragment 節點     |


可以透過節點類型 常數與 對應數值 來判斷 : 
```javascript=
document.nodeType === Node.DOCUMENT_NODE; 
document.nodeType === 9;
```
### BOM 的 核心是window 物件
而window 物件主要提供的屬性為 document / location / navigator / screen / history / frames

### DOM 節點的類型

常數名稱	                  |   值  |  說明
----------------------------------------------------------------------------------
Node.ELEMENT_NODE	         |  1	 | 表示 HTML 元素 (Element) 節點，像是 <p> 或 <div>
Node.TEXT_NODE               | 	3	 | 表示文字 (Text) 或屬性 (Attr) 節點
Node.COMMENT_NODE	         |  8	 | 表示註解節點 (Comment)
Node.DOCUMENT_NODE	         |  9	 | 表示根節點 (Document)
Node.DOCUMENT_TYPE_NODE	     |  10	 | 表示 DocumentType 節點，像是 <!DOCTYPE html>
Node.DOCUMENT_FRAGMENT_NODE  | 	11	 | 表示 DocumentFragment 節點

可以透過節點類型 常數與 對應數值 來判斷 : 
```javascript=
document.nodeType === Node.DOCUMENT_NODE; 
document.nodeType === 9;
```
```htmlembedded=
 <div id="outer">
   <div id="inner"></div>
 </div>
```
```javascript=
var outerDiv = document.getElementById('outer');
var allDivs = document.getElementsByTagName('inner');

console.log(allDivs.length);

outerDiv.innerHTML = '';
```
#### DOM 節點的新增
> document.createElement(tagName)

透過 createElement 雖然會建立新的 div 元素 newDiv , 不過這時瀏覽器是看不到它的, 值到我們透過 appendChild() / insertBefore()或 replaceChild()等方法將新元素加入指定的位置之後才會顯示
> Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。
> Node.insertBefore() 方法將一個節點安插在參考節點之前，作為某個特定父節點之子節點。
> Node.replaceChild() 方法用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。
```htmlembedded=
  <div id="div1">The text above has been created dynamically.</div>
```
```javascript=
document.body.onload = addElement;

function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```
> document.createTextNode()
文字屬於一個文字節點.
將含有數據的串加入文字節點中.

跟 createElement 一樣的是, 這個新增的TextNode 在被加入至某個節點前我們是看不到的
```htmlembedded=
  <button onclick="addTextNode('YES! ');">YES!</button>
  <button onclick="addTextNode('NO! ');">NO!</button>
  <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

  <hr />

  <p id="p1">First line of paragraph.</p>
```
```javascript=
document.body.onload = addElement;
function addTextNode(text) {
  var newtext = document.createTextNode(text),
      p1 = document.getElementById("p1");

  p1.appendChild(newtext);
}
```
> document.createDocumentFragment()
可以當作一個輕量化的Document用如同標準文件一般的方式保存 "片段的文件結構"

```htmlembedded=
<ul id="ul">
</ul>
```
```javascript=
var element  = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera', 
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);
```
> document.write()
在沒有調用的情況下寫入已經加載的文檔document.open()將自動調用document.open(). 寫完後，調用document.close()告訴瀏覽器完成頁面加載。

如果document.write()調用嵌入到內聯 HTML`<script>標記中，則它不會調用document.open()`. 例如：

```javascript=
 document.write("<h1>Main title</h1>")
```

注意：`document.write()`在延遲或異步腳本中使用將被忽略，並且您將在錯誤控制台中收到類似“document.write()從異步加載的外部腳本調用被忽略”的消息。
注意：僅在 `Edgedocument.write()`中，多次調用 an`<iframe>`會導致錯誤“SCRIPT70：權限被拒絕”。

### 修改元素的style 屬性
透過 JavaScript 修改元素的 style 屬性修改行內屬性
```javascript=
var box = document.querySelector('.box');
box.style.color = 'red';
```

許多CSS 有 破哲號 'font-style'  在 JavaScript 是不允許使用的 要改用駝峰式
```javascript=
var box = document.querySelector('.box');
box.style.fontSize = '20px';
```

### 修改元素的class 屬性
透過 JavaScript 新增class OR id
```htmlembedded=
<div id="box" class="small-font"> </div> 
```
```javascript=
var box = document.querySelector('#box');
box.className = 'large-font';
```

```htmlembedded=
<div  class="artice small-font"> </div> 
```
```javascript=
var box = document.querySelector('.artice');
box.className = 'large-font';
```
### classList 
使用 classList 屬性是取得元素 Class 的一種便利方式，也可以透過 element.className (en-US) 來得到以空格分隔之 Class 清單字串。
頁面DOM裡的每個節點上都有一個classList物件，程式設計師可以使用裡面的方法新增、刪除、修改節點上的CSS類。

> 新增類（add）
```javascript=
document.getElementById("myDIV").classList.add("mystyle");
```
為 `<div>` 元素新增多個類:
```javascript=
document.getElementById("myDIV").classList.add("mystyle", "anotherClass", "thirdClass");
```

> 移除類(remove)
使用remove方法，你可以刪除單個CSS類：
```javascript=
document.getElementById("myDIV").classList.remove("mystyle");
```
為 `<div>` 元素新增多個類:
```javascript=
document.getElementById("myDIV").classList.remove("mystyle", "anotherClass", "thirdClass");
```

> 切換類(toggle)
這個方法的作用就是，當myDiv元素上沒有這個CSS類時，它就新增這個CSS類；如果myDiv元素已經有了這個CSS類，它就是刪除它。就是反轉操作。
```javascript=
document.getElementById("myDIV").classList.toggle("newClassName");
myDiv.classList.toggle('myCssClass'); //現在是增加
myDiv.classList.toggle('myCssClass'); //現在是刪除
```

> 是否存在類（contains）
檢查是否含有某個CSS類:

```javascript=
var x = document.getElementById("myDIV").classList.contains("mystyle");
```
結果是true或者false。

> length屬性
返回類列表中類的數量。
檢視 `<div>` 元素有多少個類名:

```javascript=
var x = document.getElementById("myDIV").classList.length; //3
```
獲取獲取 `<div>` 元素的所有類名:
```javascript=
<div id="myDIV" class="mystyle anotherClass thirdClass">I am a DIV element</div>
var x = document.getElementById("myDIV").classList;
```

> item(index)
返回類名在元素中的索引值。索引值從 0 開始。如果索引值在區間範圍外則返回 null
獲取 `<div>` 元素的第一個類名（索引為0）:

```javascript=
var x = document.getElementById("myDIV").classList.item(0); //mystyle
```

> 瀏覽器支援
但是IE9和IE9以前的版本不支援該屬性，下面這個程式碼可以彌補這個遺憾：（來自網友程式碼）

```javascript=
if (!("classList" in document.documentElement)) {  
Object.defineProperty(HTMLElement.prototype, 'classList', {  
get: function() {  
var self = this;  
function update(fn) {  
return function(value) {  
var classes = self.className.split(/\s /g),  
index = classes.indexOf(value);  
fn(classes, index, value);  
self.className = classes.join(" ");  
}  
}  
return {                      
add: update(function(classes, index, value) {  
if (!~index) classes.push(value);  
}),  
remove: update(function(classes, index) {  
if (~index) classes.splice(index, 1);  
}),  
toggle: update(function(classes, index, value) {  
if (~index)  
classes.splice(index, 1);  
else  
classes.push(value);  
}),  
contains: function(value) {  
return !!~self.className.split(/\s /g).indexOf(value);  
},  
item: function(i) {  
return self.className.split(/\s /g)[i] || null;  
}  
};  
}  
});  
} 
```

### 利用 JavaScript 直接寫入 CSS 樣式 : 
> 1. 利用 `doucment.write` 在 `<head>` 寫入 css

```javascript=
document.write('<style> element { ... } </style>')
```

> 2. 利用 `doucment.createElement` 新增 link 標籤

```javascript=
let head = docment.querySelector('head');
let linkTag = docment.createElement('link');

linkTag.rel = 'stylesheet';
linkTag.type = 'text/css';
linkTag.href = 'xx.css';

head.appendChild(linkTag);
```

如果要滿足某段 或是 某個裝置 

```javascript=
let head = docment.querySelector('head');
let linkTag = docment.createElement('link');

if ( 老闆或客戶手機 ) {
    linkTag.rel = 'stylesheet';
    linkTag.type = 'text/css';
    linkTag.href = 'xx.css';

    head.appendChild(linkTag);
}
```

### Location
該Location接口表示它所鏈接到的對象的位置 (URL)。對其所做的更改會反映在與之相關的對像上。Document和Window接口都有這樣的鏈接，分別Location可以通過Document.location和訪問Window.location。
Location.ancestorOrigins
是一個靜態的，以相反的順序包含與給定對象DOMStringList關聯的文檔的所有祖先瀏覽上下文的來源。Location

#### Location.href
是一個字符串化器，它返回USVString包含整個 URL 的 a。如果更改，相關文檔將導航到新頁面。它可以從與相關文檔不同的來源進行設置。

#### Location.protocol
是一個USVString包含 URL 的協議方案，包括最後的':'.

#### Location.host
是 aUSVString包含主機，即主機名、a':'和 URL 的端口。

#### Location.hostname
是一個USVString包含 URL 的域。

#### Location.port
是一個USVString包含 URL 的端口號。

#### Location.pathname
是一個USVString包含'/'URL 路徑的首字母，不包括查詢字符串或片段。

#### Location.search
是一個USVString包含`?`後跟參數或 URL 的“查詢字符串”的 a。現代瀏覽器提供URLSearchParams和URL.searchParams以便於從查詢字符串中解析出參數。

#### Location.hash
是一個USVString包含a，'#'後跟URL 的片段標識符。

#### Location.origin 只讀
返回一個USVString包含特定位置原點的規範形式。

方法
#### Location.assign()
在參數中提供的 URL 加載資源。

#### Location.reload()
重新加載當前 URL，如刷新按鈕。

#### Location.replace()
用提供的 URL 替換當前資源（重定向到提供的 URL）。與assign()方法和設置href屬性的區別在於，使用replace()當前頁面後不會保存在 session 中History，這意味著用戶將無法使用後退按鈕導航到該頁面。

#### Location.toString()
返回USVString包含整個 URL 的 a。它是 的同義詞Location.href，但不能用於修改值。

```javascript=
// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
var loc = document.location;
console.log(loc.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(loc.protocol);  // https:
console.log(loc.host);      // developer.mozilla.org:8080
console.log(loc.hostname);  // developer.mozilla.org
console.log(loc.port);      // 8080
console.log(loc.pathname);  // /en-US/search
console.log(loc.search);    // ?q=URL
console.log(loc.hash);      // #search-results-close-container
console.log(loc.origin);    // https://developer.mozilla.org:8080

location.assign('http://another.site') // load another page

```

更換連結方便的做法

```javascript=
var  link = document.createElement('a');

link.href = 'http://google.com';

```
透過 `document.createElemen` 建立也跟 location 物件同樣擁有 protocol / host / hostname / port / pathname / search / hash 等

### history 物件

```javascript=
// 等同於瀏覽器 上一頁
history.back();
history.go(-1);

// 等同瀏覽器 下一頁
history.forward();
history.go(1);
```
如果無法取得 URL 的 完整歷史清單所以實務上 用 `history.back();` `history.forward();` 比較好

### history.pushState 讓單頁式應用 SPA 不再夢

HTML 5 在提供開發者可以的狀態與網址同時存入到 history 物件的紀錄中並且使用者切換 上下頁的時候已經儲存的狀態還原至頁面上達到單頁式無縫切換
```javascript=
var state = {
    pageName: "profile";
}

// 第一個參數為儲存物件
// 第二個參數代表新頁面的標題 目前多數瀏覽器沒用到
// 第三個參數則是代表新頁面的網址
window.history.pushStata(stste, "My Profile", "/profile/"); 
```
當我們呼叫 history.pushStata 事件 瀏覽器會在 hostory 物件新增一筆紀錄 並且將當下的 state 儲存下來
可透過 popstate 事件 當使用者點擊了瀏覽器的上下頁 觸發 popstate 事件
```javascript=
// JavaScript 透過 window.addEventListener 來監聽指定事件
window.addEventListener('popstate', function(e) {
    // 透過 e.state 來取得先前儲存的 state 狀態
    var state = e.state;

    // 在這裡替換網頁內容
}, false); 
```
`history.pushStat` 只能限定在同樣網域下或是直接使用的網址

### on-event 處理器(HTML 屬性):
像是window document 此類沒有實際元素可以利用 DOM API 提供的 on-event 處理器 來處理事件:
```javascript=
window.onload = function() {
    document.write("Hello world");
} 
```

### 事件監聽 EventTarget.addEventListener()
```htmlembedded=
<button id="myBtn">点我</button>
<p id="demo"></p>
```
```javascript=
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});
```

#### addEventListener 的三個參數
```javascript=
element.addEventListener('click', myClickHandler, {
    once: true,
    passive: true,
    capture: true,
})
```
##### once
代表這個事件只會觸發一次結束後就自動解除事件監聽
##### passive
相對於前面兩個使用上較常見的選項， passive（在我的經驗上）則較少使用，passive用於避免對象的原生事件被阻止，並且當事件中偵測到使用 `event.preventDault()`阻止原生事件時，會報錯。
這個選項常用於一些避免網頁無法正常瀏覽的事件類型，例如： scroll、 wheel等，以下是使用場景：
```javascript=
function handleScroll(e) {
 e.preventDefault()
 console.log(‘scrolling’)
}
window.addEventListener(‘scroll’, handleScroll, {
 passive: true,
})
```
當運行以上程式碼時，會報出以下錯誤：

> 使用環境與限制
雖然以上的選項都非常方便，但最重要還是在瀏覽器的相容性能否滿足大部分使用者。可惜的是，目前最新的ie版本也並不支援，不過還是可以使用polyfill來進行向下的相容。

##### capture
與原本用來表示捕獲 冒泡 機制相同  
### 事件監聽 EventTarget.removeEventListener()
```htmlembedded=
<button onclick="removeHandler()">点我</button>
<p id="demo"></p>
```
```javascript=
document.addEventListener("mousemove", myFunction);
function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}
function removeHandler() {
    document.removeEventListener("mousemove", myFunction);
}
```

#### 阻擋預設行為 event.preventDafault()
```htmlembedded=
< id="link" herf="http://google.com">Google</a>
```

使用`preventDefault` 阻擋 導連結 只執行 log 
```javascript=
var link = document.querySelector('#link');

// 在event handler 加上 e.preventDefault();
link.addEventListener('click', function(e) {
    console.log('google!');
}, false);
```
#### 阻擋預設行為 event.stopPropagation()
Event 介面的 stopPropagation() 方法可阻止當前事件繼續進行捕捉（capturing）及冒泡（bubbling）階段的傳遞。

https://ithelp.ithome.com.tw/articles/10198999

#### 事件指派
```htmlembedded=
<ul id="myList">
  <li>sss01</li>
   <li>sss02</li>
   <li>sss03</li>
</ul>
```

```javascript=
// 取得容器
var myList = document.getElementById('myList');
// 分別為li 綁定事件
// if(myList.hasChildNodes()){
//   for(var i = 0; i < myList.childNodes.length; i++){
    
//     // nodeType === 1 代表為實際 HTML 元素
//     if(myList.childNodes[i].nodeType === 1){
//       myList.childNodes[i].addEventListener('click', function() {
//        console.log(this.textContent);
//       }, false);
//     }
//   }
//}

// 改讓外層 myList 來監聽 click 事件
myList.addEventListener('click', function(e) {
    // 判斷目標元素若是 li 則執行 console.log
     if(e.target.tagName.toLowerCase() === 'li'){
        console.log(e.target.textContent);
     }
}, false);

var newList = doument.createElement('li');

var textNode = document.createTextNode("Hello world!!");

newList.appendChild(textNode);

myList.appendChild(newList);
```
使用 外層控制事件比較好控制而且也不用另外加上 click

### 一級函式 
```javascript=
// 把函式存入 變數 呼叫執行 funcA();
const funcA = function () {};

// 把函式放入 "陣列" 呼叫執行 fnucB[0]()
const funcB = [function () {}];

//把函式存入 "物件" 的屬性 呼叫時執行 foncC.method() 或 funcC['method'] ()
const foncC = { method: function () {} };

// 把函式當作參數傳入到另一個函式
const funcD = function (func) {
    return func;
}

// "另一個"函式: 存放的式 funcD 而參數為一個密名函式
const runFuncPassedToFuncD = funcD(function () { console.log('hi'); });

// 呼叫 " 另一個 " 函式
runFuncPassedToFuncD();

//函式是 "物件" 的 一種 當然也可以有自己的屬性
const funcE = function () {console.log('hi');};
console.log(funcE.answer);
```

### 函是的參數
```javascript=
const plus = function (numA, numB) {
    return numA + numB;
}


console.log(plus(1, 2));
console.log(plus(6, 5));
```

## ES6 的 箭頭函式
> 更簡短的函式寫法
> this 變數強制綁定

```javascript=
// const plus = (numA, numB) => numA + numB;
const plus =  (numA, numB) => {
    return numA + numB;
}

console.log(plus(1, 2));
console.log(plus(6, 5));
```

不過需要特別注意即使箭頭函式不需要參數前面小括號 () 是不能省略
```javascript=
const plus = () => console.log('hi');

plus();
```

如果只有一個參數的時候前面括弧 () 則可以省略
```javascript=
const plus = msg => console.log(msg);

plus('hi');
```

### call() 與 apply()
除了上述的 "函式名稱" 加上 "小括號" 的方式之外 也可以透過 call 或是 apply 來呼叫
```javascript=
const plus = function (numA, numB) {
    ruturn numA + numB;
};

fonc.call( null, 1, 2 );
func.apply( null, [1, 2] );
```

### bind
首先來看看可能比較多人使用過的 bind。
大家可能對綁 this 比較熟悉，例如：

```javascript=
var name = 'foo'
function logName(){
  console.log(this.name)
}
var tmp = {
  name: 'bar'
}
var newFunction = logName.bind(tmp)
logName() // foo
newFunction() // bar
```

透過 bind()，借用已建立的函式來創造新的函式，但將 this 綁到指定的物件上。
比較少使用到的是，bind 還可以綁定傳入函式的參數。例如：

```javascript=
function sum(a,b) {
  return a + b
};
let plusTwo = sum.bind(this, 2);
let plusFive = sum.bind(this, 5);

console.log(sum(2, 3)) // 5
console.log(plusTwo(7)) // 9
console.log(plusFive(1)) // 6
```

藉由 bind 固定傳入函式的參數，增加了函式複用的彈性，熟悉使用的話真的很方便！
總結一下，bind() 接受的第一位參數為指定的 this，其餘參數則依序傳給被綁定的函式，作為固定的參數，最後會回傳一個新的函式。

### apply & call
接著來看 apply 跟 call，因為兩者的行為幾乎一模一樣，僅接受的參數類型不同，這邊就一起說明。 不囉嗦，直接看個例子：

```javascript=
let str = '12345'
Array.prototype.map.apply(str, [c => c ** 2])
// [1, 4, 9, 16, 25 ]
Array.prototype.map.call(str, c => c ** 3)
// [1, 8, 27, 64, 125 ]
str.map(c => c ** 2)
// TypeError: str.map is not a function
```
apply 跟 call，可以想像成跟別的物件借用函式。第一參數同樣為 this，其餘參數則為傳入函式中的參數。例如前例中跟 Array.prototype 借用 str 自己無法呼叫的 map 函式。
而apply 與 call 唯一的差別，就是 apply 接受的要傳入函式參數為陣列，call 則為逐項傳入。

再看一個簡單的例子：

```javascript=
function sum (...argu) {
  return argu.reduce((acc, c) => +c === c ? acc + c : acc)
}
let params = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum.apply(null, params)   // 55
sum.call(null, ...params) // 55
```

ES6 開始有了展開運算子，call 跟 apply 在使用時差異幾乎可以忽略不計了。不過網路上有些討論說 call 的效能略優於 apply，筆者沒有實際測試，大家可以參考看看。

## arguments 物件
事實上，當函式被呼叫的時候，會產生一個 arguments 物件。 而這個 arguments 物件的內容，其實就是我們呼叫函式所代入的「參數」。

以剛剛的 plus 作為範例：
```javascript=
plus(1, 2, 3, 4, 5);
```
很明顯我們代入的參數數量超過了先前定義好的參數數量，那麼多餘的 3, 4, 5 我們有辦法可以取得嗎？

可以，就透過 arguments 這個物件。

```javascript=
var plus = function (numA, numB) {
  console.log( arguments.length );

  return numA + numB;
};

// 因為有 5 個參數，會先 log 出 5，然後回傳 1+2 的結果
plus(1, 2, 3, 4, 5);
```

請注意， arguments 雖然看起來像個「陣列」，但實際上他只是個帶有「索引」特性的物件，然後內建個 length 屬性，其他地方與「陣列」完全不同，當然也沒有 .map() 或 .filter() 這些陣列才有的方法。 [註1]

所以說，即便在定義函式的時候完全沒有指定參數給它，我們仍然可以在函式內透過 arguments 來取得參數。

```javascript=
var plus = function (numA, numB) {

  for( var i = 0; i < arguments.length; i++ ){
    console.log( arguments[i] );
  }

  return numA + numB;
};

// console.log 印出 1 2 3 4 5
plus(1, 2, 3, 4, 5);
```

除此之外， arguments 物件還有另一個屬性： callee，指的是目前執行的函式。

```javascript=
var plus = function (numA, numB) {

  // arguments.callee 指的是 plus 這個 function
  console.log( arguments.callee );

  return numA + numB;
};
```

當我們需要在函式執行「遞迴」 (在函式內自我呼叫) 時，可以執行 arguments.callee() 來達成，這屬性在「匿名函式」時特別有用。 但要小心的是，在「嚴格模式」下不允許存取 arguments.caller 和 arguments.callee 這兩個屬性。

另外， ES6 的箭頭函式 (Arrow Function) 也沒有提供 arguments 物件。

## 以「物件」作為參數

除了我們可以透過 arguments 去取得超出宣告數量的參數外，另外也有一種常見的方式：將多個參數用一個「物件」包裝起來。

假設我們要做一個「將某人加入通訊錄」的功能，那麼就用一個叫 addPerson() 的函式來實作吧！

首先要有「姓名」、「電話」：
```javascript=
var addPerson = function(firstName, lastName, phone){
  // 略...
};
```

看起來很 ok 呢!

這時候 PM 大人來了，要求要可以加入 email 欄位：

```javascript=
// 加入了 email
var addPerson = function(firstName, lastName, phone, email){
  // 略...
};
```

但是，這時候問題又來了！

客服表示有使用者 英文不好 眼睛不好，在輸入資料後「Michelle」與「Michael」傻傻分不清楚，要求加入「性別」的欄位：

```javascript=
// 加入了 gender
var addPerson = function(firstName, lastName, phone, email, gender){
  // 略...
};
```

然後又多了奇奇怪怪的需求，加入「生日」、「地址」等等...


```javascript=
// 又加入了各種欄位
var addPerson = function(firstName, lastName, phone, email, gender, birthday, address){
  // 略...
};
```

於是最後工程師在呼叫這個 addPerson() 的時候整個大崩潰。

```javascript=
addPerson('Kuro', 'Hsu', '0987654321', 'kurotanshi@gmail.com', 'male', null, 'Taipei City');
```

順序不能錯，參數不能漏，一個蘿蔔一個坑。
只要中間少了一個參數，你的通訊錄欄位就整個 gg 了。

那麼這個時候，改用「物件」的方式來取代這一堆參數，就會是很簡便的做法：

```javascript=
var people = {
  firstName: 'Kuro',
  lastName: 'Hsu',
  phone: '0987654321',
  email: 'kurotanshi@gmail.com',
  gender: 'male',
  address: 'Taipei City'
};

// 最後把 people 物件作為參數傳入 addPerson
addPerson(people);
```

像這樣，不僅呼叫函式變得更加簡便，而且由於物件的屬性不要求「順序」，所以就算中間忽略掉幾個非必填的屬性也沒問題，使得程式碼更容易閱讀，也易於維護。 往後就算要新增參數也不用擔心影響到過去的程式。

### 參數的預設檢查
前面說過，在 JavaScript 中，即使函式的參數數量已經定義過，但實際在呼叫的時候仍然可以不傳參數或者傳入不對等的數量。

傳多了還無所謂，傳少了那些接不到值的參數們就會變成 undefined。

那麼，有個很實用的檢查法，就是透過我們在 Day 08 運算式與運算子 [3]: Boolean 的真假判斷 曾介紹過的 || (OR) 這個運算子來幫助我們處理。

```javascript=
var plus = function (numA, numB) {
  return numA + numB;
};
```

在 plus 這個範例中，要是我們呼叫時，只帶入了一個參數：

```javascript=
plus(1);    // NaN
```

那麼 numB 就會變成 undefined，加總後的結果就是 NaN。

為了要避免這種情況發生，我們可以改成這樣：

```javascript=
var plus = function (numA, numB) {
  numA = numA || 0;
  numB = numB || 0;

  return numA + numB;
};
```

當然我們知道，會被判斷成 false 的值不只 undefined，或是改用嚴謹一點的寫法：

```javascript=
var plus = function (numA, numB) {
  numA = (typeof numA !== 'undefined') ? numA : 0;
  numB = (typeof numB !== 'undefined') ? numB : 0;

  return numA + numB;
};
```

那麼這時，即便我們呼叫時只給定一個參數 plus(1); 最終得到的結果至少也會是 1 而不是 NaN 了。

另外，在 ES6 之後，我們也可以像這樣替參數指定預設值：

```javascript=
var plus = function (numA = 0, numB = 0) {
  return numA + numB;
};
```

[註1] : 雖然 arguments 物件並非是陣列類型，但仍然可以透過 slice 或是 ES6 的 Array.from 來將它轉成一個新的陣列。


```javascript=
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES6
const args = Array.from(arguments);
```

[註2]：在使用 function 傳遞參數時，要小心 「Pass by sharing」帶來的誤解。


```javascript=
var o = { value: 10 };

function changeValue(obj) {
  obj = { value: 123 };
}

changeValue(o);
console.log(o);   // 此時 o 仍是 { value: 10 }
```

## callback function

callback function 跟 一般的函式沒什麼問題差別在於被呼叫的時機

// 辦公室電話響了 ( 事件配觸發 > 接電話 > (處理事件) )
```javascript=
office.addEventListener('電話', function() {// 去接電話}, false);
```
也可以這樣寫
```javascript=
var phoneHandler = function() {
    // 接電話
}
office.addEventListener('電話', phoneHandler, false);
```

還有另一個會需要用到 callback function 的 場景 就是 控制多個函式執行的順序 

```javascript=
const funcA = function () {
    console.log('function A');
};

const funcB = function () {
    console.log('function B');
};

funcA();
funcB();
```

為了確保執行的順序 就會透過 Callback function 的形式來處理
```javascript=
// 為了確保先執行 funA 在執行 funB 
// 我們在 funA 加上 callback 參數

const funA = function(callback) {
  const i = Math.random() + 1;
  
  window.setTimeout(function() {
    console.log('finction A');
    
    // 如果 callback 是個函式就呼叫它
    if( typeof callback === 'function' ) {
      callback();
    }
  }, i * 1000);
  
}

const funB = function(callback) {
  const i = Math.random() * 1;
  
  window.setTimeout(function() {
    console.log('finction B');
  }, i * 1000);
};

funA( funB );
```

## 立即被呼叫的函式
```javascript=
(function() {
    // 做某件事...
}) ();
```

例如
```javascript=
function doSomething (i) {
    // 做某件事 ....
}
```

加上小括弧 () 把這個函式包起來
```javascript=
(function doSomething (i) {
    // 做某件事 ....
});
```

因為要呼叫它所以後面加個小括弧 ()
```javascript=
(function doSomething (i) {
    // 做某件事 ....
}) (123);
```

假設只需要當下執行之後不再呼叫那麼連  doSomething 名子也不用
```javascript=
(function  (i) {
    // 做某件事 ....
}) (123);
```

用 立即函式套用到 setTimeout 的時候就能確保全部值都有回傳
```javascript=
// 用這樣 只會回傳 5
for(var i = 0; i < 5; i++){
  window.setTimeout(function() {
  console.log(i)
}, 1000);
}


// 用這樣就會回傳 0-4
for(var i = 0; i < 5; i++){
  (function(x) {
    window.setTimeout(function() {
      console.log(x)
    }, 1000);
  }) (i);
}

```

### js 冷知識 - 你所不知道的 void

接收任意運算是或是 值然侯回傳 undefined 
用法跟 typeof 一樣可以後面加上小括號 () 或是 直接加上某個值
```javascript=
void 0;   // undefined
void (0); // undefined
```

## 如何確保動作執行完才做下一個動作

最簡單是加一個變數來管理
如果 三個 function 都執行完 就執行  funcD
```javascript=
let result = [];
let step = 3;

// 假設 funcA / funcB / funcC 分別代表 '切青菜 切番茄 擺盤'
function funcA() {
    window.setTimeout(function() {
        result.push('A');
        console.log('A');

        if( result.length === step ) {
            funcD();
        }
    }, (Math.random() + 1) * 1000);
}

function funcB() {
    window.setTimeout(function() {
        result.push('B');
        console.log('B');

        if( result.length === step ) {
            funcD();
        }
    }, (Math.random() + 1) * 1000);
}

function funcC() {
    window.setTimeout(function() {
        result.push('C');
        console.log('C');

        if( result.length === step ) {
            funcD();
        }
    }, (Math.random() + 1) * 1000);
}

function funcD() {
    console.log('上菜');
    result = [];
}

funcA();
funcB();
funcC();
```

### 如果不喜歡使用全域變數來汙染執行環境的話甚至可以包裝成一個通用的函式 : 
```javascript=
function serials(tasks, callback) {
  let step = tasks.length;
  let result = [];
  
  // 檢查邏輯寫在這裡
  function check(r) {
    result.push(r);
    if(result.length === step ) {
      callback();
    }
  }
  tasks.forEach(function(f) {
    f(check);
  });
}

function funcA(check) {
    window.setTimeout(function() {
        console.log('A');
        check('A');
    }, (Math.random() + 1) * 1000);
}

function funcB(check) {
    window.setTimeout(function() {
        console.log('B');
        check('B');
    }, (Math.random() + 1) * 1000);
}

function funcC(check) {
    window.setTimeout(function() {
        console.log('C');
        check('C');
    }, (Math.random() + 1) * 1000);
}
function funcD() {
    console.log('上菜');
}

serials([funcA, funcB, funcC], funcD);
```
## Promise 的程式碼大概像這樣
```javascript=
const myFirstPromise = new Promise((resolve, reject) => {
    resolve(someValve); // 完成
    reject("failure reason"); // 拒絕
});
```

要提供一個函式 promise 功能讓它回傳一個 promise 物件即可 :
```javascript=
function myAsyncFunction(url) {
    return new  Promise((resolve, reject) => {
        //resolve() or reject()
    })
}
```
當 Promise 被完成的時候我們就能呼叫 resolve(), 然後將取得的資料傳遞出去或是想說要拒絕 Promise 就要呼叫 reject() 來拒絕

> pending : 初始狀態不是 fulfilled 或 rejcted
> fulfilled : 表示操作成功完成
> rejected : 表示操作失敗

### 如果要串連執行多個 promise 功能的話可以透過 .then() 來做到

以剛剛的 funcA, funcB, funcC 當範例 將三個函式分別透過 Promise 包裝 :
```javascript=
function funcA() {
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        console.log('A');
        resolve('A');
      }, (Math.random() + 1) * 1000);
    });
}

function funcB() {
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {        
        console.log('B');
        resolve('B');
      }, (Math.random() + 1) * 1000);
    });
}

function funcC() {
    return new Promise(function(resolve, reject) {
      window.setTimeout(function() {       
        console.log('C');
        resolve('C');
      }, (Math.random() + 1) * 1000);
    });
}

funcA()
  .then(funcB)
  .then(funcC);
```

### Promise.all 與 Promise.race
如果不在乎線後順序 只關心這三個是否完成 就可用 Promise.all
```javascript=
// 三個函式都回復 resolve 或 其中一個 reject 才會繼續的行為
Promise.all([funcA(), funcB(), funcC()])
  .then(() => {console.log('上菜'); });
```

#### Promise.race 只要其中一個任務被 resolve 就會進行下一步
這個範例是 setTimeout 是隨機生成的所以印出來結果有可能是 funcA  funcB funcC 其中一個
任何一個完成就會進到 .then 但並不會取消任務 funcA  funcB funcC 都會被執行
```javascript=
const funcA = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('A');
    }, (Math.random() + 1) * 1000);
  });
}

const funcB = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('B');
    }, (Math.random() + 1) * 1000);
  });
}

const funcC = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('C');
    }, (Math.random() + 1) * 1000);
  });
}

Promise.race([funcA(), funcB(), funcC()])
  .then(val => {console.log('race', val); });
```

## Async / Await
在 Promise 處理非同步任務的使用需要透過 .then 來等待結果 
然而使用 async 與 await 指令時 可以更加簡潔地處理這樣的非同步任務提高可讀性
```javascript=
const funcA = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('A');
    }, (Math.random() + 1) * 1000);
  });
}

const funcB = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('B');
    }, (Math.random() + 1) * 1000);
  });
}

const funcC = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('C');
    }, (Math.random() + 1) * 1000);
  });
}
async function asyncCall() {
  console.log('calling');
  let result;
  result = await funcA();
  console.log(result);

  result = await funcB();
  console.log(result);

  result = await funcC();
  console.log(result);
}

asyncCall();
```
> Async / Await 也可以跟 Promise.all 與 Promise.race 一樣
```javascript=
let result = await Promise.all([funcA(), funcB(), funcC()])

console.log('all tasks done');
```

## setTimeout 與 setlnterval
兩者最不同的地方是  setTime 只會執行一次 而  setLnterval 則是間格固定一段時件不斷重複

### 如何取消 setTime 與 setLnterval

> setTime
```javascript=
let timeoutID = window.setlnterval(() => console.log("hi"), 1000 );
```

這時候用 cearInterval() 來取消 setlnterval()
```javascript=
let timeoutID = window.setlnterval(() => console.log("hi"), 1000 );

window.cearTimeout(timeoutID);
```
setTimeout 只會執行一次所以 cearTimeout() 只會在 setTimeout 指定時間未到時才會有效果否則是多餘的

另外 setTimeout 的 第一個參數可以指定 "字串" 
```javascript=
window.setTimeout('consile.log("Hi !!!")', 1000);
```

如果 setTimeout 與 setlnterval 用以計算時間都會有一定的時間差, 但可以先計算 client 的時間與 server 端的時間差並定期與 server 端時間同步修正, 使誤差維持在最小可接受範圍內

如果要執行動畫則建議使用 requestAnimationFrame 來取代 setTimeout 與 setlnterval 

## 深入了解 JavaScript 核心: 函式 物件 原型鏈
### 範圍鏈
內層的 function inner 可以讀取外層宣告的變數, 但外層 outer function 存取不到內曾

```javascript=
var msg = 'global'

function outer() {
  var msg = 'local';
  
  function inner() {
    return msg;
  }
 
  return msg;
}
var innerFunc = outer();
var result = innerFunc;

console.log(result);
```
## 閉包
當程式碼過多或是過多的痊癒變數會造成不可預期的錯誤像是同事間的變數名稱衝突

## what's "THIS" in JavaScript
this 代表的是 function 執行時所屬的物件而不是function 本身
> this 是 JavaScript 的一個關鍵字
> this 是 function 執行時, 自動生成的一個內部物件
> 隨這function 執行的方向不同 this 所指向的值也有所不同
> 在大多數情況下this 代表的就是呼叫 function 物件

```javascript=
const getGender = function() {
  return this.gender;
}

const people1 = {
  gender: 'female',
  getGender: getGender
}

const people2 = {
  gender: 'male',
  getGender: getGender
}



console.log(people1.getGender());
console.log(people2.getGender());
```

### 巢狀迴圈的 this
> JavaScript 中, 用來切分變數的最小範圍(scope), 也就是我們說的有效範圍的單位就是function
> 當沒有特定指明 this 的情況下, 預設綁定(Default Binding) this 為 "全域物件" 也就是 window

### 強制指定 this的方式
在 JavaScript 有三個可以強制指定this 的方式, call() / apply() / bind()

### 箭頭函式與 this 

值得一提的是，從 ES6 開始新增了一種叫做 「箭頭函式表示式」 (Arrow Function expression) 的函式表達式。

而箭頭函式有兩個重要的特性：

更簡短的函式寫法
this 變數強制綁定
像這樣，我們可以直接在 ajax 的 callback function 中取用 this.textContent ： 

```javascript=
el.addEventListener("click", function(event) {
  console.log( this.textContent );

  // 箭頭函式隱含「強制指定 this」 至 callback function 中
  $ajax('[URL]', res => {
    console.log(this.textContent, res);
  });

}, false);
```

但要注意的是，無論是使用 'use strict' 或是再加上 .bind(xxx) 都無法改變 this 的內容，也不能作為物件建構子 (constructor)來使用。 箭頭函式方便歸方便，若是你的 function 內會有需要用到 this 的情況時，就需要特別小心你的 this 是不是在不知不覺中換了人來當。

### .call() 與 .apply()

基本上 .call() 或是 .apply() 都是去呼叫執行這個 function ，並將這個 function 的 context 替換成第一個參數帶入的物件。 換句話說，就是強制指定某個物件作為該 function 執行時的 this。

而 .call() 與 .apply() 的作用完全一樣，差別只在傳入參數的方式有所不同：
```javascript=
function func( arg1, arg2, ... ){
  // do something
}

func.call( context, arg1, arg2, ... );
func.apply( context, [ arg1, arg2, ... ]);
```
.call() 傳入參數的方式是由「逗點」隔開，而 .apply() 則是傳入整個陣列作為參數，除此之外沒有明顯的差別。

### bind, call, apply 的差異

bind() 讓這個 function 在呼叫前先綁定某個物件，使它不管怎麼被呼叫都能有固定的 this。
尤其常用在像是 callback function 這種類型的場景，可以想像成是先綁定好 this，然後讓 function 在需要時才被呼叫的類型。

而 .call() 與 .apply() 則是使用在 context 較常變動的場景，依照呼叫時的需要帶入不同的物件作為該 function 的 this。 在呼叫的當下就立即執行。

#### 結論
> 這個 function 的呼叫 是透過 new 進行嗎? 如果是, 那 this 就是被建構出來的物件
> 這個 function 是以 .call() 或 .apply() 的方法呼叫的嗎? 或是function 透過 .bind() 指定? 如果是, 那this 就是被指定的物件
> 這個 function 被呼叫時, 是否存在於某個物件 ? 如果是, 那 this 就是那個物件
> 如果沒有滿足以上條件, 則此 function 裡的 this 就一定是 全域物件, 在嚴格模式下則是 undefind

## localstorage 瀏覽器裡面的資料庫
```javascript=
var btn = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall');

function saveName(e){
  var str = document.querySelector('.textClass').value;
  localStorage.setItem('name', str);
}

btn.addEventListener('click', saveName);
call.addEventListener('click', function(){
  var s = localStorage.getItem('name');
  console.log('你的名子', s);
})
```

### localStorage 只能存字串的資料
> 1. 將 array 轉為 string
> 2. 將 string 轉為 array
學以上兩點是為了確保 localStorage 只會保存 string 資料
```javascript=
var country = [
  {farmer: '卡斯柏'}
];

var countryString = JSON.stringify(country);
localStorage.setItem('countryItem', countryString);

console.log(typeof(countryString)); // "string"

var getData = localStorage.getItem('countryItem');
var getDataAry = JSON.parse(getData);
console.log(typeof(getDataAry)); // "object"
```

### data-* 透過dataset 讀取自訂資料 並搭配array 使用

```javascript=
var country = [
  {
    farmer: '卡斯柏',
  },
  {
     farmer: '查理',
  }
];

var list = document.querySelector('.list');

// 更新農場資料
function updateList(){
  var str = '';
  var len = country.length;
  for(var i = 0; len > i; i++){
    str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
  }
  list.innerHTML = str;
}

updateList();

function checkList(e){
  var num = e.target.nodeName;
  if(num !=="LI"){return};
  var str = e.target.dataset.num;
  console.log(e.target.dataset.num);
  alert('您現在選擇的農夫是'+country[str].farmer);
}

list.addEventListener('click', checkList);

```
##### splice 刪除 Arry

```javascript=
var country = [
  {
    farmer: '卡斯柏',
  },
  {
     farmer: '查理',
  }
];

var list = document.querySelector('.list');

// 更新農場資料
function updateList(){
  var str = '';
  var len = country.length;
  for(var i = 0; len > i; i++){
    str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
  }
  list.innerHTML = str;
}

updateList();

function checkList(e){
  var num = e.target.nodeName;
  if(num !=="LI"){return};
  country.splice(num, 1);
  // 點選刪除 並重新選覽 li 列表
  updateList();
}

list.addEventListener('click', checkList);

```