var array1 = new Array("a","b","c","d","e","f");
var array2 = new Array("c","e");

for (var i = 0; i<array2.length; i++) {
    var arrlen = array1.length;
    for (var j = 0; j<arrlen; j++) {
        if (array2[i] == array1[j]) {
            array1 = array1.slice(0, j).concat(array1.slice(j+1, arrlen));
        }
    }
}

// or
array1 = array1.filter(function(val) {
    return array2.indexOf(val) == -1;
  });
// or
array1 = array1.filter(val => !array2.includes(val));
alert(array1);