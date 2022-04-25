var obj = {name: 'aa', type: 'bb'}

for(var i in obj){
    console.log(i + '為' + obj[i])
}
// "name為aa"
// "type為bb"

var data = ['aa', 'bb', 'cc'];
console.log(typeof data);

for(i in data){
    console.log(data[i]);
}