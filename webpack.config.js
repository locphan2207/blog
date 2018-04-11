var path = require('path');

module.exports = {
  entry: './frontend/index.jsx',
  output: './app/asset/javascript',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          preset: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extension: ['js', 'jsx', '*']
  }
};
