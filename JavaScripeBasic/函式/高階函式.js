// 將函式當作其他的參數

// 01
function sayHello(){
    return 'Hello ';
};

function welcome(callback, name){
    window.alert(callback() + name);
};

welcome(sayHello, 'janny');


// 02
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(5, 5);
myDisplayer(result);

// 將函式當作其他函式的傳回值

function sayHello(name){
    return function(){
        window.alert('Hello, ' + name);
    }
}

sayHello('janny')();

// 也可以改寫這樣

function sayHello(name){
    return function(){
        window.alert('Hello, ' + name);
    }
}

var myFunc = sayHello('janny');
myFunc();