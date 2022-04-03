var a = ['z', 'e', 'c', 'd'];
a.sort((a, b) => a.localeCompare(b))

console.log(a); // ["c", "d", "e", "z"]


/// 方法二
var a = ['z', 'e', 'c', 'd'];
a.sort((a, b) => (a > b) ? 1 : -1)

console.log(a); // ["c", "d", "e", "z"]