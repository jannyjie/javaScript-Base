var number = window.prompt('請輸入1-3的數字');

switch(number){
  case '1':
    window.alert('ONE');
    break;
  case '2':
    window.alert("TWO");
    break;
  case '3':
    window.alert("three");
    break;
  default:
    window.alert('超出範圍');
    break;
}

// 也可以用 if

if( number === '1' ){
    window.alert('ONE');
}else if(number === '2' ){
    window.alert("TWO");
}else if(number === '3' ){
    window.alert("three");
}else{
    window.alert('超出範圍');
}