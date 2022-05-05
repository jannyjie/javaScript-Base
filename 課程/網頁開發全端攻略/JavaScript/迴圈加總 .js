function addUpTo(n){
    var  j=0;
    for(let i=1; i<=n; i++){
        j+=i;
    }
    return j;
}


console.log(addUpTo(5));
console.log(addUpTo(100));
console.log(addUpTo(5000));
console.log(addUpTo(10000));