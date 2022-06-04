// Array.forEach(函數)
// Array.map(函數)
// Array.filter(函數)
// Array.find(函數)
// Array.some(函數)
// Array.every(函數)
// Array.sort(函數)
// Array.reduce( 函數 , 初始值)

// Array.forEach( 函數 )
// 將陣列元素⼀個⼀個抓出來
// 帶入函數執⾏
// 陣列元素如果是物件可以變更
// 不會產⽣新陣列
books.forEach(function (book) {
    book.total = book.discount * console.log(book.total)
})

// Array.map( 函數 )
// 將陣列元素⼀個⼀個抓出來
// 舊陣列 新陣列 將執⾏結果存成另⼀個陣列
var numbers = [1, 2, 3, 4, 5, 6]
var new_array = numbers.map(element => {
    return element * element
});
console.log(new_array) //

// map常⽤在物件壓縮與轉換只抽取或計算必要資訊產⽣新物件
function aaa(obj) {
    return {
        name: obj.name,
        total: obj.price * obj.discount
    }
}

// Array.filter(函數)
// 根據函數回傳值(True / False)
// 舊陣列 新陣列 決定要不要把元素複製到新陣列
// False
// False
// False
// True
// True
// True

var numbers = [1, 2, 3, 4, 5, 6]
var new_array = numbers.filter(element => {
    return element > 3;
});
console.log(new_array) // 4,5,6
// e.g.留下價格 > 400 的書

// Array.find( 函數 )
// 根據函數回傳值 ( True / False)


// 傳回第⼀個符合條件的元素 (非陣列4
// Array.some( 函數 )
// 其中有元素符合條件回傳 true

// Array.every( 函數 )
// 每⼀個元素都符合條件回傳 true

// e.g. 清單中有跟關鍵字ㄧ樣名字的e.g. 清單中所有會員都有驗證

// Array.sort( 函數 )
// 根據函數回傳值排列陣列
// 舊陣列
// e.g. 根據年齡排列會員資料
// 123456
// members = [{year: 27},{year: 14},{yearmembers.sort( function(a,b){
// return a.year > b.year}
// )
// console.log( members )
// [{year: 14},{year: 27},{year:50}

// Array.reduce( 函數 , 初始值根據取出每個值與暫存做運算，回傳結果
//     e.g. 把書籍價錢加到暫存裡->總價
//     books = [{price: 10},{price: 20},{price: 30}]
//     var total = books.reduce( function(total,a){
//     return total + a.price


console.clear()
var numbers = [1, 2, 3, 4, 5, 6]
// for(var i=0;i<numbers.length;i++){
//   console.log(numbers[i])
// }
numbers.forEach(function (number) {
    console.log(number)
})
var result = numbers.map(function (number) {
    return number * number
})
var result2 = numbers.filter(function (number) {
    return number % 2 == 0
})
var result3 = numbers.find(function (number) {
    return number > 3
})
var result4 = numbers.every(function (number) {
    return number > 4
})
var result5 = numbers.some(function (number) {
    return number > 7
})

var acts = [{
        name: "聖誕節派對",
        attend: 40,
        price: 200,
        cost: 7000
    },
    {
        name: "平面設計演講",
        attend: 30,
        price: 500,
        cost: 9000
    },
    {
        name: "新年登山看日出派對",
        attend: 60,
        price: 100,
        cost: 1000
    }
]

acts.forEach(function (act, i) {
    console.log(i + ": " + act.name)
})

var acts2 = acts.map(function (act) {
    return {
        name: act.name,
        total: act.attend * act.price - act.cost
    }
})
var acts3 = acts.filter(function (act) {
    return act.price <= 200
})
var party = acts.find(function (act) {
    return act.name.indexOf("派對") != -1
})

var numbers = [1, 5, 3, 2, 4]
numbers.sort(function (a, b) {
    return a - b
})
var total = numbers.reduce(function (total, num) {
    return total * num
}, 1)

var people = [{
        name: "Frank",
        gender: "male",
        year: 23
    },
    {
        name: "jan",
        gender: "female",
        year: 25
    },
    {
        name: "bob",
        gender: "male",
        year: 30
    },
    {
        name: "tom",
        gender: "male",
        year: 18
    }

]
var allmale = people.every(function (person) {
    return person.gender == "male"
})
var years = people.map(person => person.year + 5)
console.log(years)
var texts = ["124124", 'dfg3h3', 'dsf']
console.log(texts.map(text => text.length))
var ntexts = texts.map(text => {
    var temp = " "
    for (var i = 0; i < text.length; i++) {
        temp += "o"
    }
    return temp
})