var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : false;

var preLoaders = env === "development" ? [{ test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }] : [];

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    }
  })
];

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR + '/assets/js/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: preLoaders,
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
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new ExtractTextPlugin("../css/styles.css")
  ].concat(plugins)
};

module.exports = config;
