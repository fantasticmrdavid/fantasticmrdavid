var path = require('path');
var cssVars = require(path.resolve(__dirname, 'config/css_variables'));

module.exports = {
  plugins: [
    require('postcss-simple-vars')({
      variables: cssVars
    }),
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ],
}
