// 當我們知道某些程式可能會發生錯誤時, 可以使用這個提示錯誤

try{
 // 可能發生的錯誤敘述藥方在這裡, 若發生意外的判斷則要放在 catch 否則會轉移到 finally
}catch{
 // 執行一些用來處理例外的敘述, 然後在轉移到 finally 區塊此處變數exception 用來存放捕捉的例外
 // 這是一個 Error 物件, 可以透過 name / message / fileName / lineNumber 等屬性取得錯誤的名稱
}finally{
 // 無論有沒有發生意外到最後都會執行finally 區塊, 裡面可能是用來清除錯誤或收尾的敘述, finally 區塊為選擇性敘述, 若不需要的話可以省略
}

var X = 1;
try{
    var Z = X / Y;
} catch(e){
    document.write(e.name + '<br>' + + e.message);
} finally {
    document.write('<br>例外處理完畢!!!');
}

// 若您在 try 區塊或 catch 區塊裡面使用 break 或是 return 等關鍵字, 程式的控制權將直接轉移到 finally 區塊