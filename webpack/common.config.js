const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../public');
const APP_DIR = path.resolve(__dirname, '../src');

const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: 'index.jsx',
  output: {
    path: BUILD_DIR
  },
  resolve: {
    modules: [APP_DIR, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    fallback: { "console": require.resolve("console-browserify") },
    alias: {
      "assets": [`${APP_DIR}/assets/`],
      "styles": [`${APP_DIR}/styles/`],
      "contexts": [`${APP_DIR}/contexts/`],
      "components": [`${APP_DIR}/components/`],
      "data": [`${APP_DIR}/data/`],
      "helpers": [`${APP_DIR}/helpers/`],
      "routers": [`${APP_DIR}/routers/`],
      "views": [`${APP_DIR}/views/`]
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ]
  },
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
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new ESLintPlugin({
      failOnWarning: false,
      failOnError: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${APP_DIR}/styles/noscript.css`, to: 'assets/css/noscript.css' },
        { from: `${APP_DIR}/assets/`, to: 'assets/' },
        { from: `${APP_DIR}/index.html`, to: 'index.html' },
      ]
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
};
