export let header = Vue.component('header-component', {
    template: `
    <transition name="fade">
      <div class="lightbox" v-if="active">
        <div class="content">
          <div>
            子組件資料 <input type="label" v-model="value"></input>
          </div>
          <div>  
            <button @click="close">取消</button>
            <button @click="submit">完成</button>
          </div>
        </div>
        <div class="bg" @click="close"></div>
      </div>
    </transition>
    `,
    props: ['active', 'value'],
    methods: {
      close () {
        this.$emit('update:active', !this.active)
      },
      submit () {
        this.$emit('submit', this.value)
        this.close()
      }
    }
})