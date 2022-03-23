// 首先，我們來談談如何在 JavaScript 中建立日期物件。要建立此物件型別，我們可以使用 Date() 函式，該函式返回當前日期、時間、GMT 偏移量和時區。
// 例如，讓我們建立一個日期物件並使用 Date() 函式檢查當前日期。請參考下面的程式碼。
var myDate = new Date();
console.log(myDate);
// Sun Jun 20 2021 10:13:09 GMT+0500 (Pakistan Standard Time)

// 在輸出中，我們可以看到返回了完整的日期、時間、偏移量和時區。如果我們只想從日期物件中提取一個元素，我們可以使用 get 屬性。例如，讓我們使用 getUTCDate() 屬性從上述日期物件中提取月份。請參考下面的程式碼。

var myDate = new Date();
var month = myDate.getUTCMonth();
console.log(month);

// 5

// 正如你在輸出中看到的，5 表示當前月份是六月。
// 你可以使用其他屬性來獲取所需的部分，例如 getFullYear()、getDate()、getHours() 和 getSeconds()。如果要使用所需日期建立日期物件，則必須在 Date() 函式中傳遞所需日期。
// 例如，讓我們在 Date() 函式中使用我們想要的日期建立一個日期物件。請參考下面的程式碼。

var myDate = new Date(1990,05,10);
console.log(myDate);

// Sun Jun 10 1990 00:00:00 GMT+0500 (Pakistan Standard Time)
//在輸出中，時間為零，但你也可以通過將時間傳遞給 Date() 函式來設定時間。在 Date() 函式中有多種格式可以傳遞日期；下面列出了一些。

// var myDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// var myDate = new Date('YYYY-MM-DD');
// var myDate = new Date('MM/DD/YYYY');

// 例如，讓我們使用第三種格式建立一個時間物件。請參考下面的程式碼。

var myDate = new Date('10/5/1990');
console.log(myDate);

// Fri Oct 05 1990 00:00:00 GMT+0500 (Pakistan Standard Time)
// 現在讓我們使用 toISOString() 函式將當前日期轉換為 UTC。請參考下面的程式碼。

var myDate = new Date().toISOString();
console.log(myDate);

// 2021-06-20T06:09:09.043Z