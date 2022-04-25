https://rexhung0302.github.io/2020/08/11/20200811/

在 [Hexschool JS60 Training] — 60天 JavaScript 學徒試煉 Day31-60 第四十三天拿到一則題目，研究 window.location 及 轉址 或 如何取得網址參數。

想到早前也一直想筆記這個東西，雖然現在大多數都是用框架在做前端，但不免還是會碰到只有 HTML 或是 PHP 要送 Formdata 及 轉頁帶參數 這種情況，這次就好好來筆記一下吧。

## Summary & 摘要

講到 Url 就要先解釋我們常看到的那一串是什麼，下面我們會先簡短解釋一下，然後在開始介紹如何取得網址參數。

那一串長長的是什麼？
超文本傳輸安全協定(Hypertext Transfer Protocol Secure)
首先我們拿 Google 常常搜尋的時候的網址來看，最前面的 https 就是 **超文本傳輸安全協定(Hypertext Transfer Protocol Secure)**，有時候我們會看到 http 及 https 差別在於後者多了 SSL/TLS 來加密封包資料；另外還有 **ftp(檔案傳輸協定)、mailto(電子郵件位址)**。

Sub Domin(子網域)
接著就是 Sub Domin(子網域) 又稱 次網域，這是一個你申請的 網域 的 延伸網域，什麼意思呢？先讓我們看看下面幾個網址：

<!-- www.google.com
mail.google.com
firebase.google.com -->

### path(路徑)
緊接著就是路徑，像是我們進入後台頁面，會想要 新增、編輯 頁面，這時候網址可能就會是 https://taichunghouse.myhome.com/create 或 https://taichunghouse.myhome.com/edit，而路徑可以好幾層。

有時候我們後台可能會做報表，就會出現 https://taichunghouse.myhome.com/report/create 這種路徑。

### Parameter(參數)
關於參數就是今天的主題了，在我們轉址的時候，或是把網頁導向後端某一些頁面，我們會想要帶一些資訊，如果我們沒有透過打 API 的方式先把資訊送過去，那這時候就只能靠 Parameter(參數) 來傳送參數，而參數也是可以帶很多個，帶的方法也很簡單：

https://www.google.com/search?q=HelloWorld

只要在剛剛介紹的那一串 超文本傳輸安全協定(Hypertext Transfer Protocol Secure)+Sub Domin(子網域)+path(路徑) 後面帶上問號(?)然後就可以開始帶 Parameter(參數) 了，帶的方式就是 key=value，當然我們的參數也可以帶很多個，中間就是用 分隔符號(&) 區隔開來：

https://www.google.com/search?q=HelloWorld&t=20200811

緊接著就是到目的地的頁面去解析網址帶過來的資訊。


## 怎麼拿到那一串
前面我們成功的帶入了一串資訊要傳給目的地，那我們該如何拿到呢？

有好幾種做法，參照 MDN 上的說明，就有 URLSearchParams() 及 URL()，或是原生的 window.location.search。

### URL()
先說說這個做法，只要把需要解析的網址帶進去即可：

const search_url = new URL('https://www.google.com/search?q=HelloWorld&t=20200811');


#### 緊接著我們就可以使用關於 URL() 的 API：

// 取得完整網址
search_url.href; // https://www.google.com/search?q=HelloWorld&t=20200811

// 取得完整網域名稱(包含子網域)
search_url.hostname; // www.google.com

// 取得路徑
search_url.pathname; // /search(如果有多個可能會顯示 /report/create )

// 取得通訊協定
search_url.protocol; // https

// 取得參數
search_url.search; // q=HelloWorld&t=20200811

#### URLSearchParams()
然而我們這時候取到參數後並不會馬上用，我們也許會把它整理成一個陣列，或是個別分開使用，到這邊就可以使用 URLSearchParams() 了，這個 API 可以方便的 拿取、刪除、或是分別使用。

search_url.searchParams.toString(); // search%3Fq=HelloWorld&t=20200811

1. 這時候會發現前面的 問號(?) 不見了，照著 MDN 的方法，這時候就可以使用 for (const [key, value] of mySearchParams.entries) {} 的方式取出 key 及 value。


const params = search_url.searchParams;
for (let pair of params.entries()) {
  console.log(pair);
} // ["q", "HelloWorld"], ["t", "20200811"]


關於 Set.prototype.entries() 可以參考 MDN。
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/entries

2. 這樣就會把每一個 key 跟 value 拆開了。


## window.location.search

這個方法比較慢一點，但能確保 IE 也能支援。

使用 const query = window.location.search.substring(1) 可以取得網址 問號(?) 後的參數，接著一樣跑迴圈可以取的 key 及 value。

function getUrlVal(val) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == val) {
            return pair[1];
        }
    }
    return (false);
}

以上的方法可以直接取的指定 key 的 value。