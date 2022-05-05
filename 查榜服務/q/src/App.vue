<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | 1111人力營行` : `111` }}</template>
  </metainfo>
  <router-view />
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  setup () {
    const { meta } = useMeta({
      title: '1111',
      base: { href: '/vue-router', target: '_blank' },
      charset: 'utf8',
      og: {
        title: 'Og Title',
        description: 'Bla bla',
        image: [
          'https://picsum.photos/600/400/?image=80',
          'https://picsum.photos/600/400/?image=82'
        ]
      },
      twitter: {
        title: 'Twitter Title'
      },
      noscript: [
        { tag: 'link', rel: 'stylesheet', href: 'style.css' }
      ],
      otherNoscript: {
        tag: 'noscript',
        'data-test': 'hello',
        children: [
          { tag: 'link', rel: 'stylesheet', href: 'style2.css' }
        ]
      },
      body: 'body-script1.js', // TODO: fix
      bodyAttrs: {
        class: ['theme-dark']
      },
      script: [
        { src: 'head-script1.js' },
        { src: 'body-script2.js', to: 'body' },
        { src: 'body-script3.js', to: '#body-prepend' }
      ],
      htmlAttrs: { 
          amp: true,
          lang: ['en']
        },
        description: 'constants.main.description',
        meta: [
            {
              name: 'author',
              content: '111111'
            },
            {
              name: 'keywords',
              content: '11111'
            },
            {
              name: 'robots',
              content: '1111'
            }
          ]
    })
    // 兩秒 title 更換
    setTimeout(() => (meta.title = 'My Updated Title'), 2000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
