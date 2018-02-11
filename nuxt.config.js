module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Somalia Aid Flows',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'tracking aid in Somalia',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/bulma', '@nuxtjs/axios'],
  // css
  css: ['bulma/bulma.sass', '@/assets/css/main.css'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: [
        // 'postcss-custom-properties',
        '~plugins/vue-bulma-tables-2.js',
      ],
      vendor: ['axios', 'vue-bulma-tables-2'],
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
