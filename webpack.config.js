const { resolve } = require('path'),
  webpack = require('webpack'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './index.vue',
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    libraryTarget: "commonjs-module",
  },

  performance: {
    hints: false
  },

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  },

  devtool: '#source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJSPlugin(),
  ]
}