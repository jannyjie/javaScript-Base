// 奇数和偶数的判断是数学运算中经常碰到的问题，比如：有变量x，如果x=1则为奇数，为2则为偶数。这篇文章主要讲解通过JavaScript来实现奇偶数的判断。

// 方法一、求余% 
// if...else的形式：
if (x % 2 == 0) {
    // 偶数    
} else {
    // 奇数  
}

// 三元运算的形式：
(x % 2 == 0) ? "偶数" : "奇数"

// 根据奇数偶数的定义，若整数除以2没有余数，则为偶数，否则为奇数。 因此，偶数取余结果为0，奇数取余结果为非零 在if(条件)判断中，若条件为非零，表示条件成立，否则表示条件不成立（即不执行if()之后的语句） ?:的情况类似

// 方法二、 &1

if (x & 1 == 0) {
    // 偶数    
} else {
    // 奇数  
}

//  三元运算的形式：

(x & 2 == 0) ? "偶数" : "奇数"