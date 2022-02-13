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




