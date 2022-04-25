// var ex = /^[A-Za-z]{1,}/gm;
var ex = /^[A-Za-z]{1,}/g;
var str = 'Hello你好。\nBye再見';

var result = str.match(ex);

for(var i =0; i < str.match.length; i++){
    console.log(result[i])
}