// 瀏覽器判斷 排除IE與舊Edge
(function userAgent() {
    var userAgent = window.navigator.userAgent;
    var isOldEdge = userAgent.indexOf('Edge/') > 0
    var isIE = (userAgent.indexOf('MSIE') > 0) || (userAgent.indexOf('Trident/') > 0);
    if(isIE) {
        document.getElementById('firstLoading').style.display = 'none'
        document.getElementById('app').style.display = 'none'
        document.getElementById('isIE').style.display = 'block'
    } else if(isOldEdge){
        var EdgeStringPosition = userAgent.indexOf('Edge/')
        if(Number(userAgent.substring(EdgeStringPosition+5,EdgeStringPosition+7)) <= 79) {
            document.getElementById('firstLoading').style.display = 'none'
            document.getElementById('app').style.display = 'none'
            document.getElementById('isIE').style.display = 'block'
        }
    }
})()