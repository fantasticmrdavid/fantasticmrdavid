const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./common.config.js');

process.traceDeprecation = true;

const config = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: false
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
});

module.exports = config;
