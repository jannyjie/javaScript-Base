// 排序
var AA = [5,2,3];
AA.sort(function(a, b){
  return a-b;
})

console.log(AA); //[2, 3, 5]

// 自訂排序
var friends = [
    {
      name: 'John', age: 30
    },
    {
      name: 'Janny', age: 20
    },
    {
      name: 'Chris', age: 25
    }
  ];
  
  function comparPerson(a, b){
    if(a.age < b.age){
      return -1;
    }
    if(a.age > b.age){
      return 1;
    }
    return 0;
  }
  
  console.log(friends.sort(comparPerson));
//   [[object Object] {
//     age: 20,
//     name: "Janny"
//   }, [object Object] {
//     age: 25,
//     name: "Chris"
//   }, [object Object] {
//     age: 30,
//     name: "John"
//   }]

// 字串排序
var fruits = ['Ana', 'John', 'ana', 'john'];

fruits.sort();
// sort() 方法會原地（in place）對一個陣列的所有元素進行排序，
//並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
console.log(fruits); // ["Ana", "John", "ana", "john"]

//////

var fruits = ['Ana', 'John', 'ana', 'john'];
// toLowerCase() 函式会回传将字符串转换为英文小写字母后的结果。
fruits.sort(function(a,b){
  if(a.toLowerCase() < b.toLowerCase()){
    return -1;
  }
  if(a.toLowerCase() > b.toLowerCase()){
    return 1;
  }
  return 0;
})
console.log(fruits);// ["Ana", "ana", "John", "john"]

// localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。

/// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。

// lastIndexOf() 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 fromIndex。
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

