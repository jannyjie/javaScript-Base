function createXMLHttpRequest(){
    // 其他非 IE 瀏覽器
    try{
        var XHR = new XMLHttpRequest();
    }
    // 若捕捉到錯誤, 表示用戶端不是非 IE 瀏覽器
    catch(e1){
        try{
            var XHR = new ActiveXObject("Msxml2.XMLHttp");
        }
        // 若捕捉到錯誤, 表示用戶端不是 IE6+ 瀏覽器
        catch(e2){
            try{
                var XHR = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e3){
                XHR = false;
            }
        }
    }
    return XHR;
}

// 若日後網頁需要建立 XMLHttpRequest 物件, 可以載入 上面, 然後呼叫 createXMLHttpRequest() 函式

var XHR = createXMLHttpRequest();

XHR.open("GET", "poetry.txt", true);
XHR.onreadystatechange = handleSateChange;
XHR.send(null);
function handleSateChange(){
    // 撰寫程式來取得WED 伺服器傳回結果
}