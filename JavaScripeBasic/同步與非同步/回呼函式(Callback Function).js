// [JavaScript] 一次搞懂同步與非同步的一切：待會叫你 — 回呼函式(Callback Function)

// 什麼是 Callback function?
// Callback function 又稱為回呼、回調、回叫函式，先來看看 w3c 怎麼說：
// A callback is a function passed as an argument to another function.
// callback 是一種可以當作是函式參數一樣被帶進其他函式的函式。
// Callback function 其實就是一般的函式，差異只在 Callback function 是在指定時機才觸發的 function，你可以在指定的時候，做完某件事情的時候才呼較的函式，所以一句話來說，如本文標題，就像是：「待會叫你」。
// 上一篇說了 Javascript 的同步與非同步，在開發的時候，常常會需要控制程式發生的順序，funcA 跑完之後再執行 funcB，再執行 funcD…等，
// Callback function 的用途就在於可以讓我們的程式在不論同步或是非同步執行的狀況下都還是可以依序執行函式。


function sayHi(name){
    console.log(`hi ${name}`);
}

sayHi('emma');

// Callback function 帶入的方式也是一樣的：

function sayHiA(myCallback){
    myCallback();
}

function callMe(){
    console.log('hi !!');
}

sayHiA(callMe);

// 一步一步來看這段寫了些什麼：

// 1. 定義一開始要呼叫的函式 sayHi，並將帶入的參數取名為 myCallback 並執行
// 2. 定義函式 callme
// 3. 執行 sayHi，並將函式 callme 帶入當作 sayHi 所需參數
// 4. 所以這段執行碼在執行起來會是這樣：
// 5. 執行了 sayHi 並帶入函式 callme 當作參數
// 6. 在 sayHi 裡面拿到 callme 這個函式，執行 callme
// 7. 得到 callme 的 console 結果「im back!」

// 結束了，就是這樣而已，或者要帶入其他參數也可以：


function sayHiB(name, myCallback){
    myCallback(name);
}

function callMeA(who){
    console.log(`${who}, Hi!!`)
}

sayHiB('emmaS', callMeA);

// 範例
// 知道了 callback 簡易的用法之後，再來看看幾個其實你已經用過 callback 的時候：

// addEventListener
// addEventListener 是對 DOM 綁定事件的時候很常見的方式，所以大概會像是這樣：

btn.addEventListener('click', function()}{
    console.log('hi');
});

// addEventListener 也是一種非同步的 WebAPIs，這樣的寫法意即點擊後觸發後面帶入的函式

// setTimeout
// 在需要延遲發生事件的時候也很常使用到，基本寫法大概是：

setTimeout(() => {
    console.log('Hi !!!');
}, 1000);

// 等待了 1 秒之後，再執行了後面的 function。
// 如果要寫得比較像是上面的範例，把函式拉出來的話：


setTimeout(sayHiC, 1000);

function sayHiC(){
    console.log('124');
}


// Http Request
// 接下來看一個原生的 Http Request 寫法：

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        console.log('success');
    }
};

request.send();

// 在這裡我 call 了一支 GET 的 api，請求完成之後即會執行 function，所以 request.onload 後的 function 就是我的 Callback function。