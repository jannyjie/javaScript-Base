// Vue實現動態顯示textarea剩餘文字數量，具體內容如下
// 這裡我們假設允許使用者輸入的最多數量為200個

{
    /* <textarea maxlength="200" @input="descInput" v-model="desc" />
    <span>{{remnant}}/200</span> */
}

data() {
    return {
        remnant: 200
    }
}
methods: {
    descInput() {
        var txtVal = this.desc.length;
        this.remnant = 200 - txtVal;
    }
}