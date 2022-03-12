// continue 是用來在迴圈內跳過後面的敘述直接返回迴圈的開頭
var str = '';

for(var i = 1; i<= 10; i++){
  if(i == 3){
    continue;
  }
  str = str + i;
}

// split('') 將字串轉位陣列
console.log(str.split('')); // ["1", "2", "4", "5", "6", "7", "8", "9", "1", "0"]