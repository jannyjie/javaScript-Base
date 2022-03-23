// 在 JavaScript 中把 Unix 時間戳轉換為 Date
// 當我們使用 new Date() 從 Date() 類中建立一個新的物件時，它會返回建立時的時間，單位為毫秒。如果我們需要在特定的時間點從 Date 類中獲取一個物件，我們可以將 epoch 時間戳傳遞給該類的建構函式。

var timestamp = 1607110465663
var date = new Date(timestamp);
console.log(date.getTime())
console.log(date)

// 1607110465663
// 2020-12-04T19:34:25.663Z

// Date 類提供了許多方法來表示 Date 的首選格式，如：
// getDate() 返回當時日曆月 1 到 31 的日子。
// getMonth() 返回當時的月號 0 到 11。
// getFullYear() 返回當時的年號 4 位數格式。
// getHours() 以 24 小時格式返回該時間的準確小時數。
// getMinutes() 返回該時間的準確分鐘 0 至 59。
// getSeconds() 返回該時間的準確秒數 0 到 59。'

var timestamp = 1607110465663
var date = new Date(timestamp);

console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());
// Date: 4/12/2020 19:34:25

// 由於 JavaScript Date 時間戳是以毫秒為單位，而 Unix 時間戳是以秒為單位，所以我們可以將 Unix 時間戳乘以 1000 來轉換為 JavaScript 時間戳。如果 Unix 時間戳是 1607110465，那麼 JavaScript 時間戳就是 1607110465000。
// 下面的例子演示了我們如何將 Unix 時間戳轉換為 JavaScript Date 時間戳。
var unixTimestamp = 62678980
var date = new Date(unixTimestamp*1000);
console.log("Unix Timestamp:",unixTimestamp)
console.log("Date Timestamp:",date.getTime())
console.log(date)
console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());

//   Unix Timestamp: 62678980
//   Date Timestamp: 62678980000
//   Mon Dec 27 1971 12:49:40 GMT+0200 (Eastern European Standard Time)
//   Date: 27/12/1971 12:49:40