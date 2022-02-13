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