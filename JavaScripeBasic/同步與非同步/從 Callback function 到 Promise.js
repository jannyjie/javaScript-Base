// Ajax 就是指利用非同步的方法，向 server 發送 request 時或收到 response 時，由 JavaScript 決定要傳送及存取哪些資料，而不需要重新載入整個頁面而呈現資料。

// XMLHttpRequest
// 我們可以利用 XMLHttpRequest 達到透過非同步發送 Request，request.onload 就是加載完成時會觸發的 callback function：

// https://nicolakacha.coderbridge.io/2020/09/11/sync-async/

const request = new XMLHttpRequest()
// 非同步接受響應
// load 是加載完成時觸發
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText)
    } else {
        console.log("err")
    }
}

// error 是加載失敗時觸發
request.onerror = function() {
    console.log("error")
}


var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    console.log(this.response)
  }
};

request.send();

// 3個參數
// 傳送的請求的型別、請求的URL、是否非同步傳送請求的布林值
request.open("GET", "http://google.com", true)
// send()方法接收一個引數，即要作為請求主體傳送的資料
// 呼叫send()方法後，請求被分派到伺服器
request.send()

// JQuery
// 也可以透過 JQuery 的 ajax 來達到同樣的功能：

$.ajax({
    url: 'URL',
    type: 'POST',
    data: yourData,
    datatype: 'json'
})
.done(function (data) { successFunction(data); })
.fail(function (jqXHR, textStatus, errorThrown) { serrorFunction(); });

// Promise 物件
// Promise 是一個保證會在未來某段時間內回傳一個唯一結果的物件，如果成功（resolved），
// 它會回傳一個值，失敗（rejected）的話它則會回傳錯誤（也就是失敗的原因）。

// 建立 Promise 物件：
// 把一個 promise 物件 new 出來：

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it broke')
    }
})

// 使用 Promise 物件
// 用 then 來接收回傳的結果，catch 來接收回傳的錯誤：

promise
    .then(result => result + '!');
    .then(result2 => {
        throw Error
        console.log(result2);
})
    .catch(() => console.log('error!'))

// 如果中間遇到錯誤，.catch 底下的 .then 就不會被執行：
promise
    .then(result => result + '!');
    .then(result2 => result2 + '?'
    .catch(()=>console.log('error!'))
    .then(result3 => {
        console.log(result3 + '!')
    })

// 簡化再簡化的練習

function sleep() {
    const myPromise = new Promise(resolve => {
      setTimeout(resolve, 3000)
    })
    return myPromise;
  }
  
  sleep().then((data) => {
    console.log('myPromise Data', data);
  })
  .catch(err => {
    console.log('err', err);
  })

// 上面 function sleep() 中我們宣告一個叫做 myPromise 的 Promise 再回傳回去，
// 其實也就等於直接回傳 Promise 物件，
// 可以改成如下程式碼，我們還可以把秒數抽離出來變成參數，以便之後隨時修改秒數：

function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

// 還可以再簡化成 arrow function：
const sleep = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

// 中括號和 return 也可以拿掉了：

const sleep = ms => new Promise(resolve => {
    setTimeout(resolve, ms)
})

// resolve 裡面的 arrow function，也可以把中括號拿掉，這樣就完成終極簡化了：

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


// 新的 AJAX 方法：fetch
// 利用 fetch() 這個 ajax 方法來發出 request，可以回傳是一個 promise 物件。

// 用 fetch 發 GET request
const result = fetch('https://www.example_api.php')
    console.log(result)

// 用 then() 來接收 promise 物件回傳的的結果，then
// 裡面就是接完 API 之後會執行的 callback function，我們這邊先假設 callback function 是要把 response 印出來：

function printResult(response) {
    console.log(response);
}
const result = fetch('https://www.example_api.php')
result.then(printResult);

// 語法簡化：
const result = fetch('https://www.example_api.php')
    .then((response)=> {
      console.log(response);
    });

// 我們就可以拿到 response 的 body, status, header 的回傳值，但我們真正關心的是 response 的內容，
// 也就是 body 的部分，但是如果直接印出 repsonse.body，會是一個稱為 ReadableStream 的實體：

const result = fetch('https://www.example_api.php')
  .then((res)=> {
    console.log(res.body);
  })

//   在這個階段，我們還不能讀取 response 真正的內容，但 ReadableStream 這個實體可以利用一些對應的方法來取得資料：

//   arrayBuffer()
//   blob()
//   formData()
//   json()
//   text()
//   這邊以 text() 來做示範，這樣應該可以拿到資料了吧：
  
const result = fetch('https://www.example_api.php')
    .then((res)=> {
        console.log(res.text());
})

// 才怪，res.text 回傳的，還是一個 Promise 物件：
// 可...可惡，那我們只好再用一個 .then 來拿資料，這樣終於拿到資料惹：

const result = fetch('https://www.example_api.php')
  .then((res)=> {
    res.text().then (text => {
      console.log(text);
    });
  })

/*
    {
        "text": "yoyoyo"
    }
*/

// .json 也是一樣的用法，只是回傳的結果會幫我們轉成 json 格式：
const result = fetch('https://www.example_api.php')
  .then((res)=> {
    res.json().then (text => {
      console.log(text);
    });
  })

// {text: "yoyoyo"}

// 因為 .then 裡面回傳的還是一個 promise 物件，我們可以一直使用 .then 來對回傳的 promise 做處理。

// .then().then().then().then().then() (誤

// .then return 的值會是下一個 .then 的值：

const result = fetch('https://www.example_api.php')
  .then((res)=> {
    res.json().then (text => {
      return text;
    }).then( text => {
      console.log(text);
    })
  })

// 如果 .then 裡面回傳的是另一個 promise，.then 拿到的值就會是回傳的 promise 解析過的值，而不是 promise 物件：

const result = fetch('https://www.example_api.php')
  .then(res => {
    return res.json()
    // 回傳 promise
  }).then ( value => {
    // 拿到的就已經是被解析過的值了，不是 promise 物件
    console.log(value)
  })

// 比較一下兩種寫法，可以發現用 chaining 的寫法能有效減少層數：

const result = fetch('https://www.example_api.php')
  .then((res)=> {
    res.json().then (text => {
      console.log(text);
    });
  })

// ----------------------------------

const result = fetch('https://www.example_api.php')
  .then(res => {
    return res.json()
  }).then ( value => {
    console.log(value)
  })


  getGames(() => {
    return getStreams();
  }).then((streams) => {
    return getChannel();
  }).then((channel) => {
    return getTitle();
  });

//   Error 錯誤處理
// 這裡再回憶一下我們之前在介紹 Promise 提過的用 .catch 來接錯誤的部分。
// 因為 fetch 回傳的是一個 Promise 物件，所以一樣只要用 .catch 就可以接住 fetch 的 error 了：

const result = fetch('https://www.example_api.php')
  .then(res => {
    return res.json()
  }).then ( value => {
    console.log(value)
  }).catch ( err => {
    console.log(err);
  })

// TypeError: Failed to fetch

// 上面介紹的都以用 fetch 發 GET request 當例子，如果是 POST 呢？可以看看下面的例子

// POST

const data = {
    hello: 'world'
  }
  
  const result = fetch(api400, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then()
      .then()
      .catch()

// Fetch 使用時的注意事項
// content type
// 要注意 content type 是什麼，看 API 要接收的是什麼格式的資料
      
// credential
// 發 request 給不是同個來源 domain 的 API 時，不會自動把 cookie 帶上去，要加上 credentials: 'includes'：

const data = {
    hello: 'world'
  }
  
  const result = fetch(api400, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'includes',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then()
      .then()
      .catch()

// 流言終結者 mode: 'no-cors' 不能搞定 CORS
// mode: 'no-cors' 不能突破 CORS 限制，而是會回傳一個空的 response，只是跟瀏覽器說，
// 我本來就沒有要拿到 response，不要噴錯誤給我。要在瀏覽器解決 CORS，還是要 Server 開 CORS 的 header 給你
      
// Async / Await
// 可以用看起來像同步的語法，做到非同步的事情。
// 用 async 宣告一個非同步的 function，await 接一個 Promise 物件，會等到執行完 await 裡面的 promise 才往下執行。

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function() {
    console.log('hello');
    await sleep(1000); // 接一個 Promise
    console.log('world');
}
function getData() {
  const api200 =
  'https://run.mocky.io/v3/d9d4ec56-b7de-41e6-b737-31bae9a30d2b';
  return fetch(api200)
  .then(res => {
    return res.json()
  })
}

getData().then(data => {
  console.log(data);
})

async function main() {
  console.log('enter main');
  const result = await getData();
  console.log(result);
}