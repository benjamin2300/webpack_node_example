var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  node: { process:false },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};