# 透過 URLSearchParams API

這 API 使用方式簡單而且操作便利，但是不是所有瀏覽器都支援，所以想要全部支援的話，可能要考慮其他方式


```javascript=
// 假設 "?q=1234&txt=abc"
let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.has('q')); // true
console.log(urlParams.get('txt')); // "abc"
console.log(urlParams.getAll('action')); // ["abc"]
console.log(urlParams.toString()); // "q=1234&txt=abc"
console.log(urlParams.append('page', '1')); // "q=1234&txt=abc&page=1"

```

# 透過 URL API
https://developer.mozilla.org/en-US/docs/Web/API/URL


```javascript=
let url_string = "http://www.example.com/index.html?a=1&b=m2";
let url = new URL(url_string);
url.searchParams.has("b");  // true
url.searchParams.get("b");  // m2
```

## 自行撰寫
不透過 API 的話，就是使用現有 JavaScript 去撰寫 Url 的分析，擷取出參數，撰寫邏輯可以參考 Github 上許多 open source 的專案，以下的程式碼引用至
WebReflection url-search-params 專案

https://github.com/WebReflection/url-search-params


```javascript=
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
```


```javascript=
// 假設 http://sample.com/index.html?a=1&b=2
function queryString ()
{
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++)
    {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined")
        {
            query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string")
        {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else
        {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}

queryString(); // {a: "1", b: "2"}
```