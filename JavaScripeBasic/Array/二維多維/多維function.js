const myMatrix = [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8]
]

var a = [];
function printMatrix(myMatrix){
  for(var i =0; i < myMatrix.length; i++){
      for(var j = 0;  j < myMatrix[i].length; j++){
          a.push(myMatrix[i][j]);
      }
  }
}

printMatrix(myMatrix);
console.log(myMatrix); // [[2, 9, 4], [7, 5, 3], [6, 1, 8]]
console.log(a); // [2, 9, 4, 7, 5, 3, 6, 1, 8]

// 多維陣列
var matrix3x3x3 = [];

for(var i =0; i < 3; i++){
  matrix3x3x3[i] = [];
  for(var j =0; j < 3; j++){
    matrix3x3x3[i][j] = [];
    for(var z = 0; z < 3 ; z++){
      matrix3x3x3[i][j][z] = i+j+z;
    }
  }
}

console.log(matrix3x3x3) // [[[0, 1, 2], [1, 2, 3], [2, 3, 4]], [[1, 2, 3], [2, 3, 4], [3, 4, 5]], [[2, 3, 4], [3, 4, 5], [4, 5, 6]]]

const my = [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8]
]
for(var i =0; i < my.length; i++){
    for(var j =0; j < my[i].length; j++){
      for(var z = 0; z < m[i][j].length ; z++){
        matrix3x3x3[i][j][z] = i+j+z;
      }
    }
  }

///User Manual
const ms = [
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8]
    ],
     [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8]
    ],
    
]

for(var i =0; i < ms.length; i++){
  
    for(var j =0; j < ms[i].length; j++){
      for(var z = 0; z < ms[i][j].length ; z++){
        console.log(ms[i][j][z]);
      }
    }
  }