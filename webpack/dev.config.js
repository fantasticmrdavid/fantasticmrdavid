const merge = require('webpack-merge');
const common = require('./common.js');
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
              minimize: false
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    }),
  ],
});

module.exports = config;
