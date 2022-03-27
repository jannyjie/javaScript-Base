var array = [{
        name: 'John'
    },
    {
        name: 'Meg'
    }
];

// 第一種方法是.map()；
var newArray = array.map(function (singleElement) {
    return singleElement.name;
})

console.log(newArray); // return ['John', 'Meg']

// 第二種方法是forEach()
var newArray = [];

array.forEach(singleElement => {
    newArray.push(singleElement.name)
});

console.log(newArray); // return ['John', 'Meg']

// 第三種方法是帶有for()
var newArray = [];

for (var i = 0; i < array.length; i++) {
    var singleElement = array[i];
    var name = singleElement.name;
    newArray.push(name);
}

console.log(newArray); // return ['John', 'Meg']

// 也可這樣做
var newArray = [];

for (var i = 0; i < array.length; i++) {

    newArray.push(array[i].name);
}