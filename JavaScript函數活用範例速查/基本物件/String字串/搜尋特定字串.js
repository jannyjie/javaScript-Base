var str = '你好啊，可愛小寶寶。';

console.log(str.indexOf('可愛'));
console.log(str.lastIndexOf('可愛'));
console.log(str.indexOf('可愛', 2));
console.log(str.indexOf('小寶寶'));

// indexOf()方法指標回傳給定於舉舉中第一個被找到，若不存在於舉舉中則回傳-1

// lastIndexOf()
// 舉薦中最後一個被找到的方法給定之，
// 若不存在於舉手則回-1。方向為由中途尋找回傳（即向前）發起的搜索fromIndex

// 如何使用Javascript indexOf方法索引key尋找物件陣列object array?

var myArray = [
    //陣列的索引0
    {
        hello: 'leon',
        foo: 'baz'
    },
    //陣列的索引1
    {
        hello: 'stevie',
        foo: 'zoo'
    }
]
// map().indexOf()
// 在ES2015簡單的方法可以使用map函數在一行中解決它：
var  ss = myArray.map(x => x.hello).indexOf('stevie');
console.log(ss); // 1xz

// findIndex()
// 或者，對於較大的陣列可能具有更好的性能，findIndex()的最壞情況，它會在找到匹配後停止迭代：
var  qaa = myArray.findIndex(x => x.hello === 'leon');;
console.log(qaa);


const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries