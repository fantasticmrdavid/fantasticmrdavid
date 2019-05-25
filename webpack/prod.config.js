const merge = require('webpack-merge');
const common = require('./common.js');

const config = merge(common, {
  mode: 'production',
  module: {
    rules: [
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
});

module.exports = config;
