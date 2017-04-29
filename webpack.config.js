var webpack = require('webpack');
var path = require('path');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : false;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var resolve = env === 'production'
  ? {
      alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  }
  : {};

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR + '/assets/js/',
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: [
          {
            loader: 'eslint-loader',
            options: {
                failOnWarning: false,
                failOnError: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                minimize: true
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  resolve: resolve,
  devtool: "source-map",
  plugins: [
    new ExtractTextPlugin("assets/css/styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      sourceMap: env !== 'production',
      minimize: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'node-static.js',
      minChunks(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' })
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'static'
    // })
  ]
};

module.exports = config;
