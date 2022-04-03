var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];

var myNewArray = [];
for (var i = 0; i < myArray.length; ++i) {
    for (var j = 0; j < myArray[i].length; ++j){
        myNewArray.push(myArray[i][j]);
    }
}
console.log(myNewArray);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 方法二
var myNewArray = myArray.reduce(function(prev, curr) {
    return prev.concat(curr);
});

// 方法三
var myNewArray = [].concat.apply([], myArray);