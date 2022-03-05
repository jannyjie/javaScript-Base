# HTTP 狀態碼

檢查跨網域是否有連線 (CORS)
http://www.test-cors.org/


> 200 資料有正確回傳, 有撈到
> 404 資料讀取錯誤, 沒有撈到

在 RFC 2616 所定義的 HTTP/1.1 中，狀態碼可以分成 5 類

1xx Informationa - 參考資訊
2xx Successful - 成功
3xx Redirection - 重新導向
4xx Client Error - 用戶端錯誤
5xx Server Error - 伺服器錯誤

## 1xx Informational 參考資訊

這些狀態碼代表主機先暫時回應用戶端一個狀態，所以在接收一般的回應之前，用戶端應準備接收一個或多個 1xx 的回應。

> 100 Continue - 繼續執行所發出的請求。
根據 RFC 2616 Sec8.2.3 描述，當 POST 的資料大於 1024 時，請求會分兩步，第一步發送 Expect:100-continue 詢問伺服器是否接受此資料，確認接受後，第二步才 POST 資料給伺服器。

> 101 Switching Protocols - 切換通訊協定。

## 2xx Successful 成功
這類的狀態碼表示伺服器成功接收到用戶端的要求、理解用戶端要求、以及接受用戶端要求。

> 200 OK - 確定。用戶端要求成功。
> 201 Created - 已建立。
> 202 Accepted - 已接受。
> 203 Non-Authoritative Information - 非授權資訊。
> 204 No Content - 無內容。
> 205 Reset Content - 重設內容。
> 206 Partial Content - 部分內容。

## 3xx Redirection 重新導向
用戶端瀏覽器必須採取更多動作才能完成要求。例如瀏覽器可能必須重新發出 HTTP Request 要求伺服器上的不同頁面。

> 300 Multiple Choices
> 301 Moved Permanently - 要求的網頁已經永久改變網址。此狀態要求用戶端未來在連結此網址時應該導向至指定的 URI。
> 302 Found - 物件已移動，並告知移動過去的網址。
> 303 See Other - 通知用戶端使用 GET 連到另一個 URI 去查看。
> 304 Not Modified - 未修改。用戶端要求該網頁時，其內容並沒有變更。
> 305 Use Proxy - 要求的網頁必須透過 Server 指定的 proxy 才能查看(需透過 Location 標頭)。
> 306 (Unused)- (未使用) 此代碼僅用來為了向前相容而已。
> 307 Temporary Redirect - 暫時重新導向。要求的網頁只是「暫時」改變網址而已。

## 4xx Client Error 用戶端錯誤
> 400 Bad Request - 錯誤的要求。
> 401 Unauthorized - 拒絕存取。
> 402 Payment Required
> 403 Forbidden - 禁止使用。
> 404 Not Found - 找不到。
> 405 Method Not Allowed - 用來存取這個頁面的 HTTP 動詞不受允許 (方法不受允許)。
> 406 Not Acceptable - 用戶端瀏覽器不接受要求頁面的 MIME 類型。
> 407 Proxy Authentication Required - 需要 Proxy 驗證。
> 408 Request Timeout - 請求逾時。
> 409 Conflict - 資源狀態衝突。
> 410 Gone - 資源已不存在且無轉址資訊。
> 411 Length Required - 要求的 Content-Length 沒有定義。
> 412 Precondition Failed - 指定條件失敗。
> 413 Request Entity Too Large - 要求的實體太大。
> 414 Request-URI Too Long - 要求 URI 太長。會因伺服器或瀏覽器而異，建議 2048 字元以下比較保險。
> 415 Unsupported Media Type - 不支援的媒體類型。
> 416 Requested Range Not Satisfiable - 無法滿足要求的範圍。
> 417 Expectation Failed - 執行失敗。

## 5xx Server Error 伺服器錯誤
這代表錯誤發生，且這錯誤發生的原因跟「伺服器」有關。伺服器因為發生錯誤或例外狀況(Exception)而無法完成要求(Request)時，就會回應 5xx 的錯誤，且這肯定跟伺服器有關。

> 500 Internal Server Error - 內部伺服器錯誤。
> 501 Not Implemented  標頭值指定未實作的設定。
> 502 Bad Gateway - Web 伺服器在作為閘道或 Proxy 時收到無效的回應。
> 503 Service Unavailable - 服務無法使用。 這是 IIS 6.0 專用的錯誤碼。
> 504 Gateway Timeout - 閘道逾時。
>  505 HTTP Version Not Supported - 不支援的 HTTP 版本。

https://imgur.com/xnHCY8H
