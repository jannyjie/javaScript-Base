var app = new Vue({
    data: function () {
        return {
            rotate: 123,
            hasRotated: false
        }
    },
    methods: {
        handleRotate () {
            if(this.hasRotated){
                this.rotate = this.rotate + this.getRotateAngle(e.clientX,e.clientY)
                this.hasRotated = false
            }
        }
    }
});

// @click.once="handleRotate" 這樣就只會執行一次
// 請參考 https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6

// vue click事件只让触发一次
// 1.类似 发布评论，只让提交一次

{/* <button @click.once="subBtn"></button> */}

// 按钮给个 disabled
{/* <button @click="subBtn" :disabled = flag></button> */}

var app = new Vue({
    data: function () {
        return {
            flag : false
        }
    },
    methods: {   
        flagStr () {
            setTimeout(()=> {
                this.flag = false
            },500)
        },
        subBtn () {
            this.flag = true
            this.flagStr()
        }

    }
});