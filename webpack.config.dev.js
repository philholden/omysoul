'use strict'

let path = require('path')
let webpack = require('webpack')

console.log(__dirname)

module.exports = {
  node: {
    fs: 'empty'
  },
  devtool: 'cheap-module-eval-source-map',

  entry:{
    bundle: [
      'react-hot-loader/patch',
      'babel-polyfill',
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'examples', 'src'),
      'node_modules',
      'node_modules/component-archetype/node_modules'
    ]
  },
  module: {
    // postLoaders: [
    //   {
    //     loader: 'transform?brfs'
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?/,
        loader: require.resolve('babel-loader'),
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'examples', 'src')
        ]
      },
      {
        test: /\.png$/,
        loader: require.resolve('url-loader') + '?limit=100000'
      },
      {
        test: /\.json$/,
        loader: require.resolve('json-loader')
      },
      // {
      //   test: /\.js$/,
      //   loader: 'transform?brfs'
      // }

    ]
  }
}
