module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wb-somalia-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'tracking aid in Somalia',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/bulma', '@nuxtjs/axios'],
  // css
  css: ['bulma/bulma.sass', '@/assets/css/main.css'],
  plugins: [
    { src: '~/plugins/vue-bulma-tables-2', ssr: false },
    { src: '~/plugins/anychart', ssr: false },
    { src: '~/plugins/filters' },
  ],
  vendor: ['vue-bulma-tables-2', 'anychart'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      },
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
