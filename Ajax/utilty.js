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

