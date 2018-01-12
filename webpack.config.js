const { resolve } = require('path'),
  webpack = require('webpack'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vps.min.js',
    libraryTarget: "umd",
  },

  performance: {
    hints: false
  },

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.css$/,
      loader: 'css-loader',
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