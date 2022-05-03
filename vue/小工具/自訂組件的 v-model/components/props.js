export let props = Vue.component('props-component', {
    template: `
      <transition>
        <div class="modal" v-if="active">
          <div v-for="item in test">
            {{item.name}} / {{item.num}}
          </div>
          <button @click="close">X</button>
        </div>
      </transition>
    `,
    props: ['test', 'active'],
    methods: {
      close () {
        this.$emit('update:active', !this.active)
      },
    }
})