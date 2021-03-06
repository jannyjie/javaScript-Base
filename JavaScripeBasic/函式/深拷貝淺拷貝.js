// 在 JavaScript 的世界裡有基本型別與物件型別兩種定義。

// 基本型別為：Number、String、Boolean、Null、Undefined、Symbol
// 其餘像是 Array、Object 這些都屬於物件型別，兩種資料型別最大的差異就在於傳值方式

// 基本型別在賦值時，是採用 pass by value 方式，也就是傳值，如下範例：
let a = 'blue';
let b = a;
b = 'red';

console.log(b); // red

// 而物件型別在賦值時，是採用 pass by reference 方式，也就是傳址，如下範例：
let array = ['red', 'blue', 'yellow'];
let object = { p1: '111', p2: '222', p3: '333' };

let arrayCP = array;
arrayCP[0] = 'black';

let objectCP = object;
objectCP.p2 = '444';

console.log(array); // [ 'black', 'blue', 'yellow' ]  <= 原陣列被影響，因為是傳址
console.log(arrayCP); // [ 'black', 'blue', 'yellow' ]
console.log(object); // { p1: '111', p2: '444', p3: '333' }  <= 原物件被影響，因為是傳址
console.log(objectCP); // { p1: '111', p2: '444', p3: '333' }

// 看出兩者的差別了嗎！當你使用等號賦值時，會間接的影響原物件，因為都是指向原物件記憶體位址，並不會創造新的拷貝物件，這種方法是很不切實際的，
//牽一髮動全身的概念，所以當我們在複製物件或陣列時，基本上都是使用函式的方式去做處理。

// 當我們要進行複製動作時，最好先理解一下何謂淺拷貝與深拷貝：

// 淺拷貝：
// 只能完成第一層的淺層複製，若有第二層結構時，還是依據參考特性作處理，
// 也就代表指向記憶體位址還是一樣的。

// 深拷貝：
// 深度複製指定物件，操作新物件不影響原物件，兩者指向不同記憶體位址。

// 淺拷貝方法 - Object.assign
// Object.assign 是 ES6 新增的函式，可用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件，如下範例：

let array = ['red', 'blue', 'yellow'];
let object = { p1: '111', p2: '222', p3: '333' };

let arrayCP = Object.assign([], array);
arrayCP[0] = 'black';

let objectCP = Object.assign({}, object);
objectCP.p2 = '444';

console.log(array); // [ 'red', 'blue', 'yellow' ]  <= 原陣列沒有影響
console.log(arrayCP); // [ 'black', 'blue', 'yellow' ]
console.log(object); // { p1: '111', p2: '222', p3: '333' }  <= 原物件沒有影響
console.log(objectCP); // { p1: '111', p2: '444', p3: '333' }

// 但夢是美好的，第二層還是會有參考特性影響原物件問題，如下範例：
let data = [
    {
      name: 'Eric',
      weight: 60,
    },
  ];
  
  let dataCP = Object.assign([], data);
  // 操作第一層 ： 不影響原物件
  dataCP.push({
    name: 'Alice',
    weight: 50,
  });
  // 操作第二層 ： 影響原物件
  dataCP[0].name = 'Emma';
  
  console.log(data); // [ { name: 'Emma', weight: 60 } ]
  console.log(dataCP); // [ { name: 'Emma', weight: 60 }, { name: 'Alice', weight: 50 } ]

// 淺拷貝方法 - 展開運算符
//  展開運算符也是 ES6 新增的特性，主要功能是把一個陣列展開(expand)成個別值，在依序放入指定物件或陣列，也可用做淺層複製，如下範例：
let array = ['red', 'blue', 'yellow'];
let object = { p1: '111', p2: '222', p3: '333' };

let arrayCP = [...array];
arrayCP[0] = 'black';

let objectCP = { ...object };
objectCP.p2 = '444';

console.log(array); // [ 'red', 'blue', 'yellow' ]  <= 原陣列沒有影響
console.log(arrayCP); // [ 'black', 'blue', 'yellow' ]
console.log(object); // { p1: '111', p2: '222', p3: '333' }  <= 原物件沒有影響
console.log(objectCP); // { p1: '111', p2: '444', p3: '333' }

// 如同 Object.assign，第二層還是會有參考特性影響原物件問題

// 深拷貝方法 - JSON.stringify
// JSON.stringify 常見應用為 Local Storge 等存儲操作，他也可以使用在深拷貝應用！
// 主要利用 JSON.stringify 把物件轉成字串，再用 JSON.parse 把字串轉為物件，如下範例：

let data = [
    {
      name: 'Eric',
      weight: 60,
    },
  ];
  
  let dataCP = JSON.parse(JSON.stringify(data));
  // 操作第一層 ： 不影響原物件
  dataCP.push({
    name: 'Alice',
    weight: 50,
  });
  // 操作第二層 ： 不影響原物件
  dataCP[0].name = 'Emma';
  
  console.log(data); // [ { name: 'Eric', weight: 60 } ]
  console.log(dataCP); // [ { name: 'Emma', weight: 60 }, { name: 'Alice', weight: 50 } ]

//   這種方式可以達到真正的 Deep Copy，但只限於 JSON 格式，像物件中的 function 就會顯示 undefined，不過也夠用拉~

//   深拷貝方法 - $.extend
//   jQuery 也有提供一個方法可以完成深拷貝，利用 $.extend 指定強制深拷貝，如下範例：

let data = [
    {
      name: 'Eric',
      weight: 60,
    },
  ];
  
  let dataCP = $.extend(true, [], data);
  // 操作第一層 ： 不影響原物件
  dataCP.push({
    name: 'Alice',
    weight: 50,
  });
  // 操作第二層 ： 不影響原物件
  dataCP[0].name = 'Emma';
  
  console.log(data); // [ { name: 'Eric', weight: 60 } ]
  console.log(dataCP); // [ { name: 'Emma', weight: 60 }, { name: 'Alice', weight: 50 } ]