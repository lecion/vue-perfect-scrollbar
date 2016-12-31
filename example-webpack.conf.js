const path = require('path'),
  webpack = require('webpack'),
  baseConfig = require('./base-webapack.conf.js')

module.exports = Object.assign({
  entry: './example/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'main.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "example"),
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}, baseConfig)
