const merge = require('webpack-merge');
const common = require('./common.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.traceDeprecation = true;

const config = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    }),
  ],
});

module.exports = config;
