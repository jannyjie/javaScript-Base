var originArr = [1, 'a', 1, 'a'];

var deduped = originArr.filter(function(el, i, arr){
    return arr.indexOf(el) === i;
});

console.log(deduped); // [1, 'a']

// 方法二
var originArr = [1, 'a', 1, 'a'];
var deduped = originArr.filter((el, i, arr) => arr.indexOf(el) === i);

console.log(deduped); // [1, 'a']