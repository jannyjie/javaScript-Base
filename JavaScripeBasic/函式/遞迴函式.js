// 可以呼叫自己本身的函式

// 01
var result = 1;

for (var i = 1; i <= 5; i++){
    result *= i;
}

window.alert('5! =' + result);

// 02

function F(n){
    if(n === 0){
        return 1;
    } else if ( n > 0) {
        return n * F(n - 1); // F(n - 1) == 5 * 5 = 25 - 1 == 24 
               // 5 * 24 = 120
    } else{
        return -1;
    }
}

window.alert('0! = ' + F(0));
window.alert('0! = ' + F(5));