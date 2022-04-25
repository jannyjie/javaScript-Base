var ex = /http(s)?:\/\/([\w-]+\.)+[\w-]+([\w-.\/?%&=]*)?/gi;
var str1 = '範例http://www.wings.msn.to/';
str1 += '有問http://www.wings.msn.to/index.php/-/B-14/題';

console.log(str1) // "範例http://www.wings.msn.to/有問http://www.wings.msn.to/index.php/-/B-14/題"

var result = str1.match(ex);

for(var i =0; i < result.length; i++){
    console.log(result[i])
}
// "http://www.wings.msn.to/"
// "http://www.wings.msn.to/index.php/-/B-14/"




