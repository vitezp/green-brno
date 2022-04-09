const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js' },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'css-modules-typescript-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { context: 'public/data', from: '**/*', to: 'data' },
        { context: 'public/favicon', from: '**/*', to: 'favicon' },
        { from: 'public/favicon/favicon.ico', to: 'favicon.ico' },
        { context: 'public/images', from: '**/*', to: 'images' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
