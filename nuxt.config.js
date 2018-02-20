const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    CHART_KEY: process.env.CHART_KEY,
    baseUrl: process.env.BASE_URL,
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4189DD', height: '10px' },
  modules: ['@nuxtjs/bulma', '@nuxtjs/axios'],
  // css
  css: ['bulma/bulma.sass'],
  plugins: [
    { src: '~/plugins/vue-bulma-tables-2', ssr: false },
    { src: '~/plugins/vuexPersistedState', ssr: false },
    { src: '~/plugins/anychart', ssr: false },
    { src: '~/plugins/filters' },
  ],
  vendor: ['vue-bulma-tables-2', 'anychart', 'createPersistedState'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    plugins: [
      // ignore the locale directory in moment, to free up space
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.IgnorePlugin(/^\.\/geodata$/, /anychart$/),
      new webpack.IgnorePlugin(/^\.\/locales$/, /anychart$/),
      new webpack.IgnorePlugin(/^\.\/themes$/, /anychart$/),
      new BundleAnalyzerPlugin(),
      // new CompressionPlugin({
      //   asset: '[path].gz[query]',
      //   algorithm: 'gzip',
      //   test: /\.js$|\.css$|\.html$|\.js.map$/,
      //   include: /\.js$|\.css$|\.html$|\.js.map$/,
      //   threshold: 1000,
      //   minRatio: 0.8,
      //   // deleteOriginalAssets: true,
      // }),
    ],
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
