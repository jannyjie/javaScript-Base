# ES6之數字操作
```javascript=
// 聲明一個二進位 （Binary）
let binary = 0B010101;
document.write(binary) //21

// 聲明八進位 Octal
let octal = 0o666;
document.write(octal)  //438

let a = 11/4;
//es6數字的判斷都放在了Number中
// isFinite() 函數用來判斷被傳入的參數值是否為一個有限數值（finite number）
// 整數浮點型都為true
console.log(Number.isFinite(a)); //true 
console.log(Number.isFinite('ananiah')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false

//NaN
console.log(Number.isFinite(1))

// 判斷是否是整數 isInteger
let anania = 123.1;
console.log(Number.isInteger(anania)) //false  
console.log(Number.parseInt(anania)) //123  
console.log(Number.parseFloat(anania)) //123.1

//2 的53次方是最大值 最大值減一為電腦安全值
let ananiah = Math.pow(2,53)-1;
//最小值
let minananiah = -Math.pow(2,53)-1;
console.log(ananiah) //9007199254740991
console.log(minananiah) //-9007199254740992
console.log(Number.MAX_SAFE_INTEGER)  //9007199254740991 最大值
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991　最小值
console.log(Number.isSafeInteger(ananiah)) // true 判斷是否是安全整數
```

## 数值表示
二进制表示法新写法: 前缀 0b 或 0B 。
八进制表示法新写法: 前缀 0o 或 0O 。
十六进制表示法新写法: 前缀 0x 或 0X 。
```javascript=
console.log(0b10);//2
console.log(0o10);//8
console.log(0x10);//16

console.log(0b11 === 3);//true
console.log(0o10 === 8);//true
console.log(0x10 === 16);//true

let num = 10;
console.log(num.toString(8));//12
console.log(num.toString(2));//1010
console.log(num.toString(16));//a
console.log(num.toString(5));//20
```

### 常量 Number.EPSILON
Number.EPSILON 属性表示 1 与大于 1 的最小浮点数之间的差。它的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。

测试数值是否在误差范围内:
```javascript=
0.1 + 0.2 === 0.3; // false
// 在误差范围内即视为相等
equal = (Math.abs(0.1 - 0.3 + 0.2) < Number.EPSILON); // true
```

### 最大/最小安全整数
安全整数:
安全整数表示在 JavaScript 中能够精确表示的整数，安全整数的范围在 2 的 -53 次方到 2 的 53 次方之间（不包括两个端点），超过这个范围的整数无法精确表示。

最大安全整数:
安全整数范围的上限，即 2 的 53 次方减 1 。

```javascript=
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true
Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1;     // false
Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2; // false
```

最小安全整数:
安全整数范围的下限，即 2 的 53 次方减 1 的负数。


```javascript=
Number.MIN_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2; // false
Number.MIN_SAFE_INTEGER === Number.MIN_SAFE_INTEGER - 1;     // false
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true
```

### Number 对象新方法
```javascript=
Number.isFinite()//用于检查一个数值是否为有限的（ finite ），即不是 Infinity
console.log( Number.isFinite(1));   // true
console.log( Number.isFinite(0.1)); // true
 
// NaN 不是有限的
console.log( Number.isFinite(NaN)); // false
 
console.log( Number.isFinite(Infinity));  // false
console.log( Number.isFinite(-Infinity)); // false
 
// Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
console.log( Number.isFinite('foo')); // false
console.log( Number.isFinite('15'));  // false
console.log( Number.isFinite(true));  // false
Number.isNaN()
用于检查一个值是否为 NaN 。
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN('true'/0)); // true
 
// 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
// 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
Number.isNaN("NaN");      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("true");     // false
```

**从全局移植到 Number 对象的方法:**逐步减少全局方法，用于全局变量的模块化。方法的行为没有发生改变。
```javascript=
Number.parseInt()//用于将给定字符串转化为指定进制的整数。
```
```javascript=
// 不指定进制时默认为 10 进制
Number.parseInt('12.34'); // 12
Number.parseInt(12.34);   // 12
 
// 指定进制
Number.parseInt('0011',2); // 3
 
// 与全局的 parseInt() 函数是同一个函数
Number.parseInt === parseInt; // true
Number.parseFloat()
用于把一个字符串解析成浮点数。
Number.parseFloat('123.45')    // 123.45
Number.parseFloat('123.45abc') // 123.45
 
// 无法被解析成浮点数，则返回 NaN
Number.parseFloat('abc') // NaN
 
// 与全局的 parseFloat() 方法是同一个方法
Number.parseFloat === parseFloat // true
Number.isInteger()
用于判断给定的参数是否为整数。
Number.isInteger(value)
Number.isInteger(0); // true
// JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
Number.isInteger(1);   // true
Number.isInteger(1.0); // true
 
Number.isInteger(1.1);     // false
Number.isInteger(Math.PI); // false
 
// NaN 和正负 Infinity 不是整数
Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
 
Number.isInteger("10");  // false
Number.isInteger(true);  // false
Number.isInteger(false); // false
Number.isInteger([1]);   // false
 
// 数值的精度超过 53 个二进制位时，由于第 54 位及后面的位被丢弃，会产生误判
Number.isInteger(1.0000000000000001) // true
 
// 一个数值的绝对值小于 Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨
// 的最小值，会被自动转为 0，也会产生误判
Number.isInteger(5E-324); // false
Number.isInteger(5E-325); // true
Number.isSafeInteger()
用于判断数值是否在安全范围内。
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1); // false
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false

```
## Math 对象的扩展
```javascript=
Math.trunc//用于返回数字的整数部分。
/***************************/
Math.trunc(12.3); // 12
Math.trunc(12);   // 12
 
// 整数部分为 0 时也会判断符号
Math.trunc(-0.5); // -0
Math.trunc(0.5);  // 0
 
// Math.trunc 会将非数值转为数值再进行处理
Math.trunc("12.3"); // 12
 
// 空值或无法转化为数值时时返回 NaN
Math.trunc();           // NaN
Math.trunc(NaN);        // NaN
Math.trunc("hhh");      // NaN
Math.trunc("123.2hhh"); // NaN

```
```javascript=
Math.fround//用于获取数字的32位单精度浮点数形式。
/***************************/
// 对于 2 的 24 次方取负至 2 的 24 次方之间的整数（不含两个端点），返回结果与参数本身一致
Math.fround(-(2**24)+1);  // -16777215
Math.fround(2 ** 24 - 1); // 16777215
 
// 用于将 64 位双精度浮点数转为 32 位单精度浮点数
Math.fround(1.234) // 1.125
// 当小数的精度超过 24 个二进制位，会丢失精度
Math.fround(0.3); // 0.30000001192092896
// 参数为 NaN 或 Infinity 时返回本身
Math.fround(NaN)      // NaN
Math.fround(Infinity) // Infinity
 
// 参数为其他非数值类型时会将参数进行转换 
Math.fround('5');  // 5
Math.fround(true); // 1
Math.fround(null); // 0
Math.fround([]);   // 0
Math.fround({});   // NaN

```