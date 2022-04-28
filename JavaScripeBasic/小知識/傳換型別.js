// String 轉 number

Number('123'); 

console.log(typeof Number('123'));  //number

parseInt(num); // 默认方式 (没有基数)
parseInt(num, 10); // 传入基数 (十位数)
parseFloat(num); // 浮点数
Number(num); // Number 构造器
~~num; //按位非
num / 1; // 除一个数
num * 1; // 乘一个数
num -
0 + // 减去0
num; // 一元运算符 "+"

// -------------------- parseInt -------------------------
// 根据 JsPerf.com 的基准测试，大多数浏览器对 parseInt 的响应最佳。
// 虽然它是最快的方式，但使用 preseInt 会碰到一些常见陷阱：

parseInt("08"); // returns 0 部分老浏览器.
parseInt("44.jpg"); // returns 44

// parseInt: 没有传入基数时，默认是传入的基数为 10 parseInt(num, 10)，
// 如果你不知道 num 属性的类型，不要使用 parseInt 进行字符串转数字。


// -------------------- parseFloat -------------------------
// 如果你不解析 16 进制数，这是一个非常好的选择。例如：

parseInt(-0xff); // returns -255
parseInt("-0xFF"); // returns -255
parseFloat(-0xff); // returns -255
parseFloat("-0xFF"); // returns 0

// 注意：字符串中的负十六进制数字是一个特殊情况，如果你用 parseFloat 解析，
// 结果是不正确的。为了避免程序出现 NaN 的情况，应该检查转化后的值。

parseFloat("44.jpg"); // return 44

// parseFloat: 转换十六进制数时要小心，如果你不知道要转换对象的类型，'
//不要使用 parseFloat。

// -------------------- 按位非 -------------------------
// 可以把字符串转换成整数，但他不是浮点数。如果是一个字符串转换，它将返回 0；

~~1.23; // returns 1
~~"1.23"; // returns 1
~~"23"; // returns 23
~~"Hello world"; // returns 0

// 这是什么原理？通过翻转>)每个位，也称为数字的 A1 补码。你可以使用它，但注意只能用来存储整数。所以通常情况不要用它，除非你能确定这个数是在 32 位整数之间的值（因为调用的 ToInt32 的规范）。
// 按位非：用它确保输入中没有字符，仅用于整数。

// -------------------- Number -------------------------
// Number 与以上提及的转换方式一样存在这样的问题，解析时试图找出你给他的数字：
Number("023"); // returns 23
Number(023); // returns 19

// 注意：023 实际上是一个八进制数，
// 无论你怎么做，都是返回 19；对于没有单引号或双引号的十六进制数一样。
// Number 也是 JsPerf 中最慢的之一。
// Number：几乎不用它。

