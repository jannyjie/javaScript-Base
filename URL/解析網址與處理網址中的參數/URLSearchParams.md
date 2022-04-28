# URLSearchParams
githubURL.searchParams 這個物件是透過另一個名為 URLSearchParams 的 Web API 所建立的，透過這個 API 可以很方便的幫去設定、刪除和讀取網址字串的部分。
想要檢視這個 URLSearchParams 物件最簡單的方是直接使用 toString() 方法：

https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

想要檢視這個 URLSearchParams 物件最簡單的方是直接使用 toString() 方法：

```javascript=
// 檢視 URLSearchParams 物件
githubURL.searchParams.toString();      // "q=react&type=Code"
```

假設我們要取得解析後的網址參數，只需要使用 .entries() 方法搭配 for ... of 就可以：

```javascript=
let params = githubURL.searchParams;
for (let pair of params.entries()) {
  console.log(`key: ${pair[0]}, value: ${pair[1]}`)
}
```

```javascript=
key: q, value: react
key: type, value: Code
```

除了可以把網址參數的部分解析出來外，它還提供了像是 .has(<key>) 和 .get(<key>) 的方法，可以檢驗特定的參數是否存在，並取得其值：

```javascript=
let params = githubURL.searchParams;
params.has('q');    // true
params.get('q');    // "react"
```

其實如果你對於 ES6 當中的 Map 物件有印象的話，你會發現 URLSearchParams 的用法就和 Map 的用法大同小異。


https://developer.mozilla.org/zh-TW/docs/orphaned/web/javascript/reference/global_objects/map