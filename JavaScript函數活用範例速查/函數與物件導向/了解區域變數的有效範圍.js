var scope = 'janny';

function show(){
    var scope = 'jack';
    return scope;
}

console.log(scope);//"janny"

console.log(show())// "jack"