<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'


let layouts = {

  "_default": () => import('/Users/JBU/Library/Mobile Documents/com~apple~CloudDocs/WebDevelopment/ocasio2018/ocasio2018.github.io/layouts/default.vue'  /* webpackChunkName: "layouts/default" */)

}

export default {
  head: {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"ROBOTS","content":"INDEX, FOLLOW"},{"hid":"description","name":"description","content":"Make calls for Ocasio2018"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.png"},{"rel":"stylesheet","href":"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"}],"script":[{"src":"https://code.jquery.com/jquery-3.2.1.slim.min.js","type":"text/javascript","body":true},{"src":"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js","type":"text/javascript","body":true},{"src":"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js","type":"text/javascript","body":true},{"src":"https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js","type":"text/javascript","body":true}],"style":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

