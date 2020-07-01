const path = require('path');

module.exports = {
  name: 'webpack-config',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: ['./client']
  },
  module: {
    rules: [{
      test: /\.js?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-hot-loader/babel']
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist'
  }
};