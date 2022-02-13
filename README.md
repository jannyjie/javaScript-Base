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
