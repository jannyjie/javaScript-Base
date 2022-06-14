console.log(NaN); // Number
console.log(Infinity); // Number
console.log(Infinity < 100000000000000000); // Infinity 比任何數字都大 是最大的數字

console.log(5/0); // Infinity 因為 除 0 找不到能除的樹所以無限大

console.log(NaN === NaN); // false  因為他們的值不相等

// 如果要確認是否為 NaN
let result = (0/0)
console.log(isNaN(result)); // ture