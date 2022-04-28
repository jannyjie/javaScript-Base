# 設定網址參數（URL parameters）


除了前面提過的， URLSearchParams 物件可以解析網址參數之外，它還可以用來設定網址參數，有幾種不同的設定方式，這幾種寫法會得到一樣的結果：


```javascript=
let githubURL = new URL('https://github.com/search');

// 方法一：直接寫入
var searchParams = new URLSearchParams('q=react&type=Code');

// 方法二：代入陣列
var searchParams = new URLSearchParams([['q', 'react'], ['type', 'Code']]);

// 方法三：代入物件
var searchParams = new URLSearchParams({q: 'react', type: 'Code'});

// 都會得到一樣的結果
searchParams.toString() // "q=react&type=Code"
```

設定好網址參數後最後我們只需要把這個 URLSearchParams 物件代入原本的 URL 物件中就可以了：

```javascript=
githubURL.search = searchParams;
githubURL.href; // "https://github.com/search?q=react&type=Code"
```

另外，在 URLSearchParams 中，還提供了 .set(), .append(), .sort(), .delete() 的方法可以讓你才操作這些網址參數，有興去的話可以到 MDN 上看一下。


# 實作
## 解析網址中的網址參數

假設我們想要解析這段網址：
https://www.google.com.tw/search?hl=zh-TW&as_q=react&&lr=lang_zh-TW&cr=countryTW&as_qdr=all&as_occt=any


```javascript=
const googleSearchURL = new URL('https://www.google.com.tw/search?hl=zh-TW&as_q=react&&lr=lang_zh-TW&cr=countryTW&as_qdr=all&as_occt=any');

// 透過物件的解構賦值，取出 URL 物件的屬性值
const { href, protocol, hostname, pathname, search, searchParams } = googleSearchURL;

// 透過陣列的解構賦值，取得網址參數部分
for(let [key, value] of searchParams.entries()) {
  console.log(`key: ${key}, value: ${value}`)
}

// 取得所有 key-value，回傳陣列
[...searchParams];
```

## 設定網址參數代入 fetch API 中
原本要直接把整個網址代入 fetch API 內：

```javascript=
// 原本的寫法
const googleURL = 'https://www.google.com.tw/search';
const searchParams = 'as_occt=any&as_q=react&as_qdr=all&cr=countryTW&hl=zh-TW&lr=lang_zh-TW';

// fetch API
fetch(`${googleURL}?${searchParams}`).then();
```

使用 URLSearchParams 後可以把參數整理的比較乾淨再放入：

```javascript=
const googleURL = new URL('https://www.google.com.tw/search');
let searchParams = new URLSearchParams({
  as_occt: "any",
  as_q: "react",
  as_qdr: "all",
  cr: "countryTW",
  hl: "zh-TW",
  lr: "lang_zh-TW"
});

googleURL.search = searchParams;

// fetch API
fetch(googleURL.href).then();
```