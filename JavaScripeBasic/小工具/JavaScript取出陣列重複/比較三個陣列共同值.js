var x = ['AA', 'BB', 'CC', 'DD', 'EE'];
var y = ['AA', 'BB', 'EE'];
var Q = ['AA', 'EE'];

// var z = x.filter(function(val) {
//   return y.indexOf(val) != -1;
// });
var z = x.filter(function(val) {
  return y.indexOf(val) != -1;
});

var W = z.filter(function(val) {
  return Q.indexOf(val) != -1;
});
console.log(W);

// 過濾 
array1 = array1.filter(function(val) {
    return array2.indexOf(val) == -1;
});
// Or, with the availability of ES6:

array1 = array1.filter(val => !array2.includes(val));


// 01

var x = ['1', '1', '0', '1', '1'];
var y = ['0', '1', '0', '0', '0'];
var Q = ['1', '1', '1', '0', '0'];

y.filter(function(val) {
  return x.indexOf(val) != -1;
});

var a = y.filter(function(val) {
  return Q.indexOf(val) != -1;
});

console.log(a) // ["0", "1", "0", "0", "0"]
