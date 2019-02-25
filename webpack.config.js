const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src'),
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        loader: 'babel-loader'
      }
    ]
  }
};
