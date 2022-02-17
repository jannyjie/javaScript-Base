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