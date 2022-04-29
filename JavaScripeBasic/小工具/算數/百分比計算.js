function toPercent(num, total) { 

    return (Math.round(num / total * 10000) / 100.00 + "%");// 小数点后两位百分比
   
}

console.log(toPercent(1400, 1975))