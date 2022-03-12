# Error : 
此物件用來表示錯誤, 所有錯誤物件都是以 Error 物件為基底所衍生出來的

> Error 常見錯誤
1. name       錯誤
2. message    錯誤描述
3. fileName   發生錯誤的檔案名稱
4. lineNumber 發生錯誤的行數

> SyntaxError 
此錯誤表示務法錯誤, 可能是遺漏結尾的括號 / 遺漏的陣列逗號 使用未成對的引號等. 

> TypeError
此錯誤表示型別發生錯誤可能是變數或是參數不是有效的型別, 或是使用不存在的物件或方法

> ReferenceError
此物件用來表示參考值錯誤可能是變數尚未宣告或是變數不再有效範圍內

> RangeError 
此物表示範圍錯誤可能是使用超出定義範圍的數值

> URIError
此物愈來表示網址錯誤, 可能是傳遞無效參數給 encodeUI() / decodeURI()     
