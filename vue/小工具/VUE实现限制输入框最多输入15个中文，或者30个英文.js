{
    /* <input type="text"  v-model="groupName" class="edit-input" ref="groupName"
        @input="changeValue"
        @change="editGroupNameSave(groupInfo.name)" > */
}

changeValue() {
        let leng = this.validateTextLength(this.groupName)
        if (leng >= 15) {
            this.$refs.groupName.maxLength = leng
        } else {
            this.$refs.groupName.maxLength = 30
        }
    },
    validateTextLength(value) {
        // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
        let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g
        let mat = value.match(cnReg)
        let length
        if (mat) {
            length = (mat.length + (value.length - mat.length) * 0.5)
            return length
        } else {
            return value.length * 0.5
        }
    }