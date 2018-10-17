module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'ROBOTS', content:'INDEX, FOLLOW'},
      { hid: 'description', name: 'description', content: 'Make calls for Ocasio2018' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'}
    ],
    script: [
      { src:'https://code.jquery.com/jquery-3.2.1.slim.min.js', type: 'text/javascript', body: true },
      { src:'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', type: 'text/javascript', body: true },
      { src:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', type: 'text/javascript', body: true },
      { src:'https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js', type: 'text/javascript', body: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  build: {
    /*
    ** Run ESLINT on save
    *
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          //enforce: 'pre',
          //test: /\.(js|vue)$/,
          //loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
    extend (config, { isDev, isClient, isServer }) {
      // fix node_modules directory
      config.resolve.modules = config.resolveLoader.modules = [path.resolve(__dirname, "node_modules")];
    }
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  }
}
