var data = ['aa', 'bb', 'cc', 'dd'];
data.push('ee');

// push 新增最後
console.log('push', data); // ["aa", "bb", "cc", "dd", "ee"]

data.unshift('01');
// unshift 新增第一個
console.log('unshift',data); // ["01", "aa", "bb", "cc", "dd", "ee"]

console.log('toString', data.toString()); // "01,aa,bb,cc,dd,ee"

// pop 與 shift 方法不只能刪除元素，也能取得元素(以其說是刪除倒不如說是取出還比較適合)
console.log('pop', data.pop()); // ee
console.log('toString', data.toString()); // "01,aa,bb,cc,dd"
console.log('shift',data.shift()); // "01"
console.log('toString', data.toString()); // "aa,bb,cc,dd"]