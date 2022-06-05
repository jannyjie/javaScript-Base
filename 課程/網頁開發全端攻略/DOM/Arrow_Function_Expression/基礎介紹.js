// Arrow_Function_Expression 與一般 function 最大不同是 js Hoisting

// Arrow_Function_Expression
// this keyword 是指 window object
// 另一個定義(製作)function 的 方法

// function declaration
function sayHiA () {
    console.log('hi');
}

sayHiA()


// Arrow_Function_Expression
let sayHi = (name) => {
    console.log(name);
}

sayHi("jenny");

// this keyword

let wilson = {
    name: 'jenny',
    // function declaration
    greeting(){
        console.log('Hi, my name is' + this.name + '.');
    },
    // Arrow_Function_Expression
    walk: () => {
        // 這裡的 this 是指window
        console.log(this);
        console.log('Mis. jenny');
    }
}

wilson.greeting();

wilson.walk();