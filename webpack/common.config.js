const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../public');
const APP_DIR = path.resolve(__dirname, '../src');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : false;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'assets/js/[name]-bundle.js',
    chunkFilename: 'assets/js/[name]-chunk.js',
  },
  resolve: {
    modules: [APP_DIR, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          'ts-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: false
            }
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      }
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(APP_DIR, 'sw.js'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${APP_DIR}/styles/noscript.css`, to: 'assets/css/noscript.css' },
        { from: `${APP_DIR}/assets/`, to: 'assets/' },
      ]
    }),
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
      inject: false,
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Fantastic Mr David',
      short_name: 'Fantastic Mr David',
      description: 'A super amazing portfolio of stuffs!',
      background_color: '#000',
      theme_color: '#d12b2b',
      icons: [
        {
          src: `${APP_DIR}/assets/images/pwa_icon.png`,
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
      ],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
