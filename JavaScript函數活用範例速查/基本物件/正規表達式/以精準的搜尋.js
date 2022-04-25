var ex = /http(s)?:\/\/([\w-]+\.)+[\w-]+([\w-.\/?%&=]*)?/gi;
var str1 = '範例http://www.wings.msn.to/';
str1 += '有問http://www.wings.msn.to/index.php/-/B-14/題';

while((result = ex.exec(str1)) != null){
    console.log(result[0]);
}

// "http://www.wings.msn.to/"
// "http://www.wings.msn.to/index.php/-/B-14/"