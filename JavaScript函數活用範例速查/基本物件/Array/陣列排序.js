var data1 = ['aa', 'bb', 'cc', 'dd'];
// reverse 反向排序
console.log(data1.reverse());  // ["dd", "cc", "bb", "aa"]


// 排序陣列
// 要讓陣列依照資定規則拍續可使用sort方法

// 陣列.sort(function(m,n){
//     ...排序規則
// })

// 參數 { 排序規則} 可以使用下列 callback函數
// 1. 以兩個相互比較的陣列元素參數
// 2. 當第1 參數大於第2參數時將傳回正數，較小時則傳回負數，若兩個參數相同傳回0
// 倘若 [排序規則]被忽略，參數則被視為字串，陣列也將以字典的順序排序。

var data2 = ['90', '01', '20', '30'];

console.log(data2.sort().toString()); // "01,20,30,90"
console.log(data2.sort(function(m,n){return m-n;}).toString()); // "01,20,30,90"    


let person = [
    { name : 'Aidan Jackson', age: 75 , phone: '576-7883'},
    { name : 'Mia Abraham', age: 26 , phone: '913-9939'},
    { name : 'Harry King', age: 50 , phone: '173-8232'},
    { name : 'Dean Burton', age: 50 , phone: '394-4192'},
]

  // 比較姓名的方法
function compareName(a, b){
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

  // 比較年齡的方法
function compareAge(a, b){
    return a.age - b.age
}

  // 照姓名排序
let personSortByName = person.sort(compareName)
console.log(personSortByName);

  // 照年齡排序
let personSortByAge = person.sort(compareAge)
console.log(personSortByAge);


// 亂數排序 (Random Order)
var numbers = [10, 50, 1, 80, 250, 500, 101, 300];

numbers.sort(function(a, b) {
    return 0.5 - Math.random();
});

// 每次執行排序後的結果都會不一樣
numbers; // [250, 10, 80, 1, 500, 101, 50, 300]


// 排序物件元素 (Sorting Object Array)
var members = [
    {name: 'Mike', age: 30},
    {name: 'Jimmy', age: 25},
    {name: 'Judy', age: 20}
];

members.sort(function(a, b) {
    // boolean false == 0; true == 1
    return a.age > b.age;
});

// 順序依序會是 Mike -> Jimmy -> Judy
console.log(members);

// 倒轉陣列排序 (Reversing an Array)
var fruits = ['cherries', 'apples', 'bananas'];

fruits.sort();
fruits.reverse();

// 輸出 ["cherries", "bananas", "apples"]
console.log(fruits);