const webpack = require('webpack');
const path = require('path');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_DIR = path.resolve(__dirname, '../public');
const APP_DIR = path.resolve(__dirname, '../src');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : false;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

process.traceDeprecation = true;

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
              minimize: false
            },
          },
        ],
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
    }),
    new ExtractTextPlugin("assets/css/styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      sourceMap: true,
      minimize: false,
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
          src: 'public/assets/images/pwa_icon.png',
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      // icons: [ // TODO
      //   {
      //     src: path.resolve('src/assets/large-icon.png'),
      //     size: '1024x1024' // you can also use the specifications pattern
      //   }
      ]
    })
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'static'
    // })
  ]
};

module.exports = config;
