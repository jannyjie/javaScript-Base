// 每次切換頁需要保持 10  
let one = 1; // 開頭
let total = 32; // 總數 
let num = 10; // 分頁數量
let aa = [] // 運算 

for (let i = 0; i < total; i++) {
    aa.push(i + 1)
}
// console.log(aa)
if (one - 4 <= 0) {
  console.log(aa.slice(0, one + (10 - one)))
} else if (one - 4 >= 0 && one +5 <= total) {
   console.log(2)
   console.log(aa.slice(one - 5 , one + 5))
}else{
  console.log(3)
  console.log(aa.slice(one - (10 - (total - one) ) , total))
}

// console.log("Math", Math.abs(-1))
 