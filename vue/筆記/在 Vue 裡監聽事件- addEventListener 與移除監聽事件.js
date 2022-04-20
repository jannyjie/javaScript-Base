// 在傳統 js 裡要監聽事件我們會用 el.addEventListener(event, fn); 的方式，如果要在 Vue.js 裡監聽事件，可以寫成這樣：
var app = new Vue({
    mounted() {
        window.addEventListener('resize', this.resizeHandler);
    },
    methods: {
        resizeHandler() {
            // do smth
        }
    }
});
// 由於 js 是非同步的，所以可能會遇到 dom 還沒產出來我們就要監聽事件，這樣會沒辦法把事件綁上去，
// 我們就可以使用 $nextTick 來確認 dom 已經生成後再把事件綁上去，像這樣：
var app = new Vue({
    
    methods: {
        resizeHandler() {
            this.$nextTick(() => {
                this.$refs.video.addEventListener('timeupdate', () => {
                  //偵測影片播放
                })
            })
        }
    }
});

// ref 不清楚是什麼的可以看這篇↓。
// https://tools.wingzero.tw/article/sn/97
// 另外如果是在大型專案，特別是 SPA 類型的，最好是在離開的時候把監聽事件給移除以免影響到效能，我們可以寫在 beforeDestroy 這邊：
var app = new Vue({
    
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    },
});