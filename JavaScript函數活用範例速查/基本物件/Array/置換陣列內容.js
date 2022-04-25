var data1 = ['aa', 'bb', 'cc', 'dd'];

console.log(data1.splice(2,2, '01', '02'));  // ["cc", "dd"]
console.log(data1); // ["aa", "bb", "01", "02"]
