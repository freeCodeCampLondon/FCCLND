var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  context: __dirname + '/dev/app',
  entry: [
    './app.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      /* Fixes a problem with isotope */
      'masonry': 'masonry-layout',
      'isotope': 'isotope-layout'
    }
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')},
      {test: /\.(png|jpe?g)$/i, loader: 'url?limit=10000'},
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
    new HtmlWebpackPlugin({
      template: __dirname + '/dev/app/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('main.css'),
    new CopyWebpackPlugin([
      {
        from: 'data/fccLndData.json',
        to: 'data'
      },
      {
        from: 'assets/images',
        to: 'assets/images'
      }
    ])
  ]
};

module.exports = config;
