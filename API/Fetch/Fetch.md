# Fetch概述和語法
在構建Javascript專案時，我們可以使用window物件，並且它帶有許多可以在專案中使用的出色方法。這些功能之一是Fetch API，它提供了一種簡單的全域性 .fetch() 方法，這是一種從API非同步獲取資料的邏輯解決方案。

## 讓我們看一下 .fetch() 方法的語法。

```javascript=
fetch(url)
  .then((res) => 
    // handle response
  )
  .catch((error) => {
    // handle error
});
```

在上面的示例中，您可以看到簡單的獲取GET請求的語法。在 .fetch() 方法中，我們有一個強制性引數url，它返回一個Promise，可以使用Response物件來解決。

.fetch() 方法的第二個引數是選項，它是可選的。如果我們不傳遞 options，請求總是GET，它從給定的URL下載內容。

在選項引數裡面，我們可以傳遞方法或頭資訊，所以如果我們想使用POST方法或其他方法，我們必須使用這個可選的陣列。

正如我之前提到的，Promise會返回Response物件，正因為如此，我們需要使用另一個方法來獲取響應的主體。有幾種不同的方法可以使用，取決於我們需要的格式：

1. response.json()
2. response.text()
3. response.formData()
4. response.blob()
5. response.arrayBuffer()

## 讓我們看一下帶有可選引數的程式碼示例。

```javascript=
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
  .then((response) => response.json())
  .catch((error) => console.log(error))
```

在上面的程式碼示例中，你可以看到簡單的POST請求，包括 method、header 和 body params。然後我使用 json() 方法將響應轉換為JSON格式。

現在，讓我們仔細看看axios。