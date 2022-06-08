// 每次切換頁需要保持 10  
let one = 11; // 開頭
let total = 16; // 總數 
let num = 10; // 分頁數量
let aa = [] // 運算 

for (let i = 0; i < total; i++) {
    aa.push(i + 1)
}
console.log(aa)
if (one + 9 <= total) {
    console.log(1)
    console.log(aa.slice(one - 1, one + (num - 1)))
} else if (one + 9 >= total) {
    console.log(2)
    console.log(aa.slice(total - num, total))
}
