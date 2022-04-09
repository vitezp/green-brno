const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')

const output = merge(CommonConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
})

module.exports = output
