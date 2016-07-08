var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/dev/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './dev/app/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'},
      {test: /\.html$/, loader: 'html'},
      {test: /\.scss$/, loader: 'file?name=[name].[hash].css!extract!css!postcss!sass'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[hash].[ext]'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[hash].[ext]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/fonts/[name].[hash].[ext]'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[name].[hash].[ext]'}
    ]
  },
  postcss: function() {
    return [require('autoprefixer')({})];
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};