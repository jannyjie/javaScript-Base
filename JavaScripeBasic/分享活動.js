// event22/test_weiling/lastVersion (541)

const LINEShareText = encodeURIComponent(this.shareData.lineQuote);
const LINEShareMobile = 'https://line.naver.jp/R/msg/text/?'+LINEShareText+'https://www.1111.com.tw/171737/'
switch (media) {
    case 'FB':
        window.open("https://www.facebook.com/sharer/sharer.php?u=https://www.1111.com.tw/171674/&quote="+ encodeURIComponent(this.shareData.fbQuote) + "&t="+ encodeURIComponent(this.shareData.titile),"sharer",'toolbar=0,status=0,width=626,height=436')
        break;
    case 'LINE':
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(LINEShareMobile)
        } else {
            window.open("https://social-plugins.line.me/lineit/share?url=https://www.1111.com.tw/171737/&text=" + LINEShareText)
        }
        break;
    default:
        alert('分享功能異常 請重新整理後再次使用')
        break;
}