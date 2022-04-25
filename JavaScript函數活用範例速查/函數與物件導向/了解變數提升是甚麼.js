var scope = 'janny';

function show(){
    console.log(scope) //undefined 
    // 雖然 'scope' 直全域有效但他未傳入function 
    var scope = 'jack';
    return scope;
}

console.log(scope);
console.log(show())



