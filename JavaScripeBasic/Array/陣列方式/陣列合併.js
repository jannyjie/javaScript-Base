var zero =0;
var AA = [1,2,3];
var BB = [-3,-2,-1];

var number = BB.concat(zero, AA);

console.log(number); // [-3, -2, -1, 0, 1, 2, 3]

/////$Recycle.Bin

const arr1 = ["Hi", "Wow"];

const arr2 = arr1.concat([1, 2, 3], 4, 5, 6, { a: 42 });

arr1; // [ 'Hi', 'Wow' ]
arr2; // [ 'Hi', 'Wow', 1, 2, 3, 4, 5, 6, { a: 42 } ]

// 字串也可以
const colorName = "purple"
const allColor4 = [...warmColor, ...coldColor, colorName];

allColor4; // [ 'red', 'yellow', 'blue', 'gray', 'purple' ]