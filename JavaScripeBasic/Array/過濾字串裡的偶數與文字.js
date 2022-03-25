var strb = [],
    stra = [],
    strc = ["糖尿病", "3", "高血壓", "2", "冠心病", "1"];
for (let i = 0; i < strc.length; i++) {
    if (i % 2 == 0) {
        strb.push(strc[i])
    } else {
        stra.push(strc[i])
    }
}
console.log("姚輝乾");
console.log(strc)
console.log(stra)
console.log(strb)

// "姚輝乾"
// ["糖尿病", "3", "高血壓", "2", "冠心病", "1"]
// ["3", "2", "1"]
// ["糖尿病", "高血壓", "冠心病"]