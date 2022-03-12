// for(初始化運算式; 條件式; 選取器;){
//     敘述;
// }

// for(let i = 0; i < 10; i++){

// }

var total = 0;
for(let i = 1; i <= 10; i+=2){
    total = total + i;
    console.log(total);
  
};


// 巢狀迴圈 
var str1 = '', str2 = '';

for(var i = 1; i <= 9; i++){
  str1 = '';
  for(var j = 1; j <= 9; j++){
    str1 = str1 + 1 + '*' + j + '=' + (i*j) + '\t' ; 
  }
  str2 = str2 + str1 + '\n';
}

window.alert(str2);