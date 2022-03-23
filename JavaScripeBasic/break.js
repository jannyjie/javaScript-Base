// break 如果需要在迴圈檢查其他條件式一旦成立就跳出

var str = '';

for(var i = 1; i<= 10; i++){
  if(i == 3){
    break;
  }
  str = str + i;
}

// split('') 將字串轉位陣列
console.log(str.split('')); // ["1", "2"]



for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
      if((i*j) > 40){
        break;
      }
      document.write(j+"*"+i+"="+i*j); 
      // 1*1=1
      // 1*2=22*2=4
      // 1*3=32*3=63*3=9
      // 1*4=42*4=83*4=124*4=16
      // 1*5=52*5=103*5=154*5=205*5=25
      // 1*6=62*6=123*6=184*6=245*6=306*6=36
      // 1*7=72*7=143*7=214*7=285*7=35
      // 1*8=82*8=163*8=244*8=325*8=40
      // 1*9=92*9=183*9=274*9=36
  }
  document.write("<br>")
}
