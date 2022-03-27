//直接建立一個object的方法：
var obj = {
    key1: value1,
    key2: value2
};

// or

var employees = [];
employees.push({
    id: 100,
    name: 'Yashwant',
    age: 30
});
employees.push({
    id: 200,
    name: 'Mahesh',
    age: 35
});

//直接 指定進object中的方法：
obj.key3 = "value3";
// or
obj["key3"] = "value3";

// 另外有一種進階方式，使用函數來呼叫
var getProperty = function (propertyName) {
    return obj[propertyName];
};

getProperty("key1");
getProperty("key2");
getProperty("key3");