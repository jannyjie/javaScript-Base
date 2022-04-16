// string.trim()從字符串的開頭和結尾刪除空格和行終止符序列。

const ss = '  Kate ';
console.log(ss.trim());// => 'Kate'
const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim()); // => '555-123'


// string.trimStart()僅從字符串的開頭刪除空格序列和行終止符。

const aa = '  Kate ';
console.log(aa.trimStart());// => "Kate "
const qq = '\t  555-123\n ';
console.log(qq.trimStart()); // => "555-123'

// string.trimEnd()僅從字符串末尾刪除空格序列和行終止符。
const rr = '  Kate ';
console.log(rr.trimEnd());// => "Kate "
const uu = '\t  555-123\n ';
console.log(uu.trimEnd()); // => "555-123'
