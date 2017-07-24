const path = require('path'),
  webpack = require('webpack'),
  baseConfig = require('./base-webapack.conf.js')

module.exports = Object.assign({
  entry: './example/example-vueRouter/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'index.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      // 'vue-perfect-scrollbar$':path.join(__dirname, 'dist/index.js'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'example/example-vueRouter'),
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}, baseConfig)