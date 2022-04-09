const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    disableHostCheck: true,
    inline: true,
    liveReload: false,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    https: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {},
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
})
