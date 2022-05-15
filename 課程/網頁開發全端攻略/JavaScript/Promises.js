// Promise 是用來優化非同步的語法，而 Async、Await 可以基於 Promise 讓非同步的語法的結構類似於 “同步語言”，更易讀且好管理。
// https://www.casper.tw/development/2020/02/16/all-new-promise/

// Promise 的結構及狀態
// 結構
// Promise 本身是一個建構函式，函式也是屬於物件的一種，因此可以附加其它屬性方法在上，透過 console 的結果可以看到 Promise 可以直接使用 all、race、resolve、reject 的方法，寫法如下（後面再介紹運用方式）：

// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

// Promise 建構函式 new 出的物件，則可以使用其中的原型方法（在 prototype 內），其中就包含 then、catch、finally，這些方法則必須在新產生的物件下才能呼叫。

// 透過 new Promise() 的方式建立 p 物件，此時 p 就能使用 Promise 的原型方法：

const p = new Promise();

p.then(); // Promise 回傳正確
p.catch(); // Promise 回傳失敗
p.finally(); // 非同步執行完畢（無論是否正確完成）

// 除此之外，Promise 建構函式建立同時，必須傳入一個函式作為參數（executor function），此函式的參數包含 resolve, reject，
// 這兩個方法分別代表成功與失敗的回傳結果，特別注意這兩個僅能回傳其中之一，回傳後表示此 Promise 事件結束。
new Promise(function (resolve, reject) {
    resolve(); // 正確完成的回傳方法
    reject(); // 失敗的回傳方法
});
// resolve 及 reject 的名稱可以自定義，但在開發上大多數開發者習慣維持此名稱。

// 狀態
// Promise 的關鍵在處理非同步的事件，而非同步的過程中也包含著不同的進度狀態，在 Promise 的執行過程中，可以看到以下狀態。

// pending：事件已經運行中，尚未取得結果
// resolved：事件已經執行完畢且成功操作，回傳 resolve 的結果（該承諾已經被實現 fulfilled）
// rejected：事件已經執行完畢但操作失敗，回傳 rejected 的結果

// 進入 fulfilled 或 rejected 就算完成後不會再改變，Promise 中會使用 resolve 或 reject 回傳結果，並在調用時使用 then 或 catch 取得值。
// 如果要判斷 Promise 是否完成，可依據 Promise 事件中的 resolve 及 reject 是否有被調用，以下範例來說在沒有調用兩個方法時，
// Promise 的結果則會停留在 pending

function promise() {
    return new Promise((resolve, reject) => {});
}

console.dir(promise());


promise(1)
    .then(success => {
        console.log(success);
        return promise(2);
    })
    .then(success => {
        console.log(success);
        return promise(0); // 這個階段會進入 catch
    })
    .then(success => { // 由於上一個階段結果是 reject，所以此段不執行
        console.log(success);
        return promise(3);
    })
    .catch(fail => {
        console.log(fail);
    })
// 使用 Promise 改寫 XMLHttpRequest
// Promise 很大一部份是用來處理 Ajax 行為，此段透過改寫的形式了解使用 Promise 及傳統的寫法有哪些差異。

// 傳統上，需透過 XMLHttpRequest 建構式來產生可進行遠端請求的物件，並且依序定義方法(GET)及狀態(onload)並送出請求(send)，
// 取得結果後的其它行為則需要撰寫在 onload 內，程式碼結構如下：
var url = 'https://jsonplaceholder.typicode.com/todos/1';

// 定義 Http request
var req = new XMLHttpRequest();

// 定義方法
req.open('GET', url);

// 當請求完成，則進行函式的結果
req.onload = function () {
    if (req.status == 200) {
        // 成功直接列出結果
        console.log(req.response);
    } else {
        // 失敗的部分
    }
};

// 送出請求
req.send();

// 接下來將以上的行為封裝至 get 函式內，此函式包含 Promise 及上述的 XMLHttpRequest 行為，運用時只要直接使用 get(url)...，接下來的運用方式則是符合 Promise 的結構，
// 重複運用的情況下程式碼可以大幅提高易讀性。
function get(url) {
    return new Promise((resolve, reject) => {
        // 定義 Http request
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status == 200) {
                // 使用 resolve 回傳成功的結果，也可以在此直接轉換成 JSON 格式
                resolve(JSON.parse(req.response));
            } else {
                // 使用 reject 自訂失敗的結果
                reject(new Error(req))
            }
        };
        req.send();
    });
}

// 往後的 HTTP 直接就能透過 get 函式取得
get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        console.log(res);
    })
    .catch((res) => {
        console.error(res)
    })
// 01

// let example = new Promise((resolve, reject) => {
//     reject(new Error('not allowed'));
// })

// example
//     .then((d) => {
//         console.log(d);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// 02
function getData(name) {
    if (name == 'Wilson') {
        return new Promise((resolve, reject) => {
            resolve({
                name: "Wilson Ren",
                age: Math.floor(Math.random() * 20)
            });
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Not allowed to access data."))
            }, 2000);
        })
    }
};

function getMovies(age) {
    if (age < 12) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    test: "cartoon"
                })
            }, 1500);
        })
    } else if (age < 18) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    text: "teen movies"
                })
            }, 1500);
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("not allowed. Too old."))
            }, 1500);
        })
    }
}

getData("Jenny")
    .then((obj) => {
        console.log(obj);
        return getMovies(obj.age);
    })
    .then((meg) => {
        console.log(meg.text);
    })
    .catch((e) => {
        console.log(e);
    })


// 03
async function showMovie(){
    const obj = await getData("wilson");
    const movie = await getMovies(obj.age);
    console.log(movie.text);
}

showMovie();


// 04
async function showMovie1(){
    try{
        const obj = await getData("wilson");
        const movie = await getMovies(obj.age);
        console.log(movie.text);
    }catch (e){
        console.log(e);
    }
}

showMovie1();