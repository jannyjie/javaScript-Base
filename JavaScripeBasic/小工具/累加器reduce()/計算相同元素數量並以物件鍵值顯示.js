const toy = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

const counterToy = toy.reduce((sum, item) => {
  if (!sum[item]) sum[item] = 0 // 沒有這個鍵值則設定一個
  sum[item]++  // 計次+1
  return sum
}, {}) // 設定初始值為空object

console.log(counterToy) // { "car": 5, "truck": 3, "bike": 2, "walk": 2, "van": 2 }


var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }