// JavaScript 什麼是Callback函式 (Callback Function)？
// Callback函式，亦稱回呼函式，簡單來說就是「在一支函式執行完後，才要執行的函式」。
// A function that is to be executed after another function has finished executing.


// 例如一支函式doFirst()，在執行結束才要執行doLater()，這個doLater()就是一支callback函式。

var doFirst = function (callback) {
    console.log('do first...');
    callback(); // <---執行傳入的doLater()
}

/** callback function **/
var doLater = function () {
    console.log('do later...')
}
doFirst(doLater);

// do first...
// do later...

var doFirst = function (callback) {
    setTimeout(function() {
        console.log('do first...');
        callback(); // <-- 在"do first..."印出後才執行
    }, 3000); // 非同步，3秒後才執行
}

var doLater = function () {
    console.log('do later...')
}

doFirst(doLater);

// 間隔3秒
// do first...
// do later...