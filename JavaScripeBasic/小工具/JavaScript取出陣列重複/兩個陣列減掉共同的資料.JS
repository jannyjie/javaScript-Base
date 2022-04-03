let array1 = Array('a', 'b', 'c', 'd', 'e', 'f')
let array2 = Array('c', 'e', 'g')

array1 = array1.filter(function(val) {
  return array2.indexOf(val.toString()) == -1;
});

console.log(array1); // ["a", "b", "d", "f"]


function test() {
    var array1 = new Array("a","b","c","d","e","f");
    var array2 = new Array("c","e");
    for (var i = array1.length - 1; i >= 0; i--) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            array1.splice(i, 1);
          }
        }
      }
      console.log(array1)
    }
  
test(); // ["a", "b", "d", "f"]

// 第二個方法
var myArray = [
    {name: 'deepak', place: 'bangalore'}, 
    {name: 'chirag', place: 'bangalore'}, 
    {name: 'alok', place: 'berhampur'}, 
    {name: 'chandan', place: 'mumbai'}
  ];
  var toRemove = [
    {name: 'deepak', place: 'bangalore'},
    {name: 'alok', place: 'berhampur'}
  ];
  
  for( var i=myArray.length - 1; i>=0; i--){
      for( var j=0; j<toRemove.length; j++){
          if(myArray[i] && (myArray[i].name === toRemove[j].name)){
              myArray.splice(i, 1);
          }
      }
  }
  
  alert(JSON.stringify(myArray));

// 第三個方法
