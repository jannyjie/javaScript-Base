// for...of 是實際的值所以需要依照順序去執行但for...in 則沒有只要抓取屬性即可沒有一定順序

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
