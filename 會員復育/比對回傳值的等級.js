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
      ty();
    }
  }
};


function ty(){
  for (var k = 0; k < cc.length; k++) {
    var arrlen = bb.length;
    for (var j = 0; j<arrlen; j++) {
       if (cc[k] == bb[j]) {
         bb = bb.slice(0, j).concat(bb.slice(j+1, arrlen));
        }
    }
  }
}
console.log(as)
console.log(bb)// ["DD", "EE", "FF", "GG", "HH"]

// if(bb.length <= 5){
//   console.log(one);
// }



