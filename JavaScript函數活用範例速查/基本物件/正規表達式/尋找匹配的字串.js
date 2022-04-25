var ex = /http(s)?:\/\/([\w-]+\.)+(\/[\\?%&=]*)?/gi;
var str1 = '範例http://google.com';
var str2 = '有問題';

console.log(str1.search(ex))
console.log(str2.search(str2))
