// 01
function shoeMag(){
    console.log(msg);
}

var msg = 'Hi !!!';

shoeMag(); 

console.log('02', msg);

// 02
function shoeMag(){
    var msg = 'Hi !!!';
    console.log(msg);
}
  
  
shoeMag();

// 當宣告移到 函式裡面 就無法讀取變數 所以會 爆錯
console.log('02 ' + msg);
