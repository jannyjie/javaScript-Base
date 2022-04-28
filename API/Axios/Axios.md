# Axios概述和語法
Axios是一個Javascript庫，用於從Node.js或XMLHttpRequests或瀏覽器發出HTTP請求。作為一個現代的庫，它是基於Promise API的。

axios 有一些優勢，比如對XSRF的保護或取消請求。

為了能夠使用 axios 庫，我們必須將其安裝並匯入到我們的專案中。可以使用CDN，npm或bower安裝 axios。現在，讓我們來看一個簡單的GET方法的語法。

```javascript=
axios.get(url)
  .then(response => console.log(response));
  .catch((error) => console.log(error));
```

在上面的程式碼中，你可以看到我使用 .get() 方法建立一個簡單的GET請求。如果你想在函式中使用POST方法，那麼只需使用 .post() 方法代替，並將請求資料作為引數傳遞即可。

當我們建立配置物件時，我們可以定義一堆屬性，最常見的是：

1. baseUrl
2. params
3. headers
4. auth
5. responseType

作為響應，axios 返回一個promise，該promise將與響應物件或錯誤物件一起解析。在響應物件中，具有以下值：

1. data，這是實際的響應主體
2. status，呼叫的HTTP狀態，例如200或404
3. statusText，以文字訊息形式返回的HTTP狀態，例如 ok
4. headers，伺服器發回標頭
5. config，請求配置
6. request，XMLHttpRequest物件

現在，讓我們看一下帶有資料的POST方法的程式碼示例。

```javascript=
axios.post({
  '/url', { name: 'John', age: 22},
  { options }
})
```

在上面的程式碼中，你可以看到 post 方法，我們把config物件作為param，其中有URL、資料和附加選項。

我們還可以將config物件定義為變數，然後像下面的示例一樣將其傳遞給 axios。

```javascript=
const config = {
  url: 'http://api.com',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  data: {
    name: 'John',
    age: 22
  }
}
axios(config);
```

在這裡，你可以看到所有的引數，包括URL、資料或方法，都在config物件中，所以在一個地方定義所有的東西可能更容易。