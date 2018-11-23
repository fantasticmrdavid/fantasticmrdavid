const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../public');
const APP_DIR = path.resolve(__dirname, '../src');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : false;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'assets/js/[name]-bundle.js',
    chunkFilename: '[name]-chunk.js'
  },
  resolve: {
    modules: [APP_DIR, 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      // https://github.com/webpack/webpack/issues/4666
      constants: `${APP_DIR}/constants`,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
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
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
        minify: {
            collapseWhitespace: true
        },
    }),
    new ExtractTextPlugin("assets/css/styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      sourceMap: false,
      minimize: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'assets/js/node-static.js',
      minChunks(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(APP_DIR, 'sw.js'),
    })
  ]
};

module.exports = config;
