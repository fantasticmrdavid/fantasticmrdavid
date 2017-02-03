var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var PROD = (process.env.NODE_ENV === 'production');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR + '/assets/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?importLoaders=1!postcss-loader'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/styles.css")
  ].concat(PROD ? [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ] : []
  )
};

module.exports = config;
