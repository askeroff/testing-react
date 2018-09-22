const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      exclude: ['template.html'],
      watch: true
    }),
    new HtmlWebpackPlugin({
      title: 'Testing React Lessons',
      template: './build/template.html'
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', 'json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
