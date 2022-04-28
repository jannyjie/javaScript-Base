https://www.gushiciku.cn/pl/pjgD/zh-tw


如前所述，當我們在使用 .fetch() 方法的時候，需要對響應資料使用某種方法，當我們在傳送帶有請求的body時，需要對資料進行字串化。

在 axios 中，它是自動完成的，所以我們只需在請求中傳遞資料或從響應中獲取資料。它是自動字串化的，所以不需要其他操作。

讓我們看看如何從 fetch() 和 axios 獲取資料

```javascript=
// fetch
fetch('url')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
// axios
axios.get('url')
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
```

在上面的例子中，你可以看到，使用 axios 我們沒有額外的一行程式碼，在 .fetch()的例子中，我們必須將資料轉換為JSON格式。在一個較大的專案中，如果你建立了大量的呼叫，那麼使用 axios 來避免重複程式碼會更舒服。

# 錯誤處理
在這一點上，我們還需要給 axios 點贊，因為處理錯誤是非常容易的。如果出現像404這樣的錯誤響應，promise就會被拒絕並返回一個錯誤，所以我們需要捕獲一個錯誤，我們可以檢查它是什麼型別的錯誤，就是這樣。讓我們看看程式碼示例。

```javascript=
axios.get('url')
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.response) {
      // When response status code is out of 2xx range 
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // When no response was recieved after request was made
      console.log(error.request)
    } else {
      // Error
      console.log(error.message)
    }
  })
```

在上面的程式碼中，當響應良好時，我返回了資料，但是如果請求以任何方式失敗，我就能夠檢查 .catch() 部分中的錯誤型別並返回正確的訊息。

對於 .fetch() 方法，就比較複雜了。每次我們從 .fetch() 方法中得到響應時，我們需要檢查狀態是否成功，因為即使不是，我們也會得到響應。在 .fetch() 的情況下，只有當請求沒有完成時，promise才會被解決。讓我們看一下程式碼示例。

```javascript=
fetch('url')
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json()
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
```

在這段程式碼中，我已經在承諾物件中檢查了程式碼的狀態，如果響應有狀態 ok，那麼我就可以處理並使用 .json() 方法，但如果沒有，我必須在 .then() 裡面返回錯誤。

為了方便和正確的錯誤處理，對於你的專案來說，axios 絕對會是一個更好的解決方案，但如果你正在構建一個只有一兩個請求的小專案，使用 .fetch() 是可以的，但你需要記住正確處理錯誤。