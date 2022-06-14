let numbers = [10, 20, 30];

// for loop
for(var i = 0; i < numbers.length; i++){
    console.log(i); // 10, 20, 30
}

// forEach
numbers.forEach((n)=> {
    console.log(n); // 10, 20, 30
})

// for of loop 無法用 object
for(let n of numbers){
    console.log(n); // 10, 20, 30
}


// for in loop 
let Wilson = {
    name: 'jenny',
    age: 25
}

for(let i in Wilson){
    console.log(i); // 輸出  key 值
    console.log(Wilson[i]); // 輸出  value 值
}
