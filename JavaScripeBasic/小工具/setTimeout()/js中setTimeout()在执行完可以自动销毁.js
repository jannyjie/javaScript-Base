var timer = setTimeout(function(){
    console.log(2);
},1000);
console.log(timer);//　1

clearTimeout(timer);

console.log(timer);//1

