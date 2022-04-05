var aa = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH'];
var a1 = ['1', '0', '1', '1', '1', '1', '1', '1'];
var as = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH'];
var bb = as;
var b1 = ['1', '0', '1', '1', '1', '1', '1', '1'];

var cc = ['AA', 'BB', 'CC'];
var c1 = ['1', '1', '1'];

var pp = [];

var one = '柏金';

for(let i = 0; i < aa.length; i++){
  for(let j = 0; j < bb.length; j++){
    var arrlen = bb.length;
    // 比較 ALL next 卡別
    if(aa[i] == bb[j]){
      // 比對bb / cc 擷取兩個不同的值
      bb = bb.filter(val => !cc.includes(val));
    }
  }
};


console.log(bb)// ["DD", "EE", "FF", "GG", "HH"]




