var song1 = '四條龍的歌曲';
var song2 = 'Janny';

console.log(song1.length) // 6
console.log(song2.length) //5


var song2 = 'Janny';

let le = song2.length;

var sum = song2.split(/[\uD800-\uDBFF][\uDCOO-\uDFFF]/g).length-1;
console.log(song2.length - sum) // 5