var NODE_ENV = process.env.NODE_ENV || 'development';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var isDev = NODE_ENV === 'development';
var isProd = NODE_ENV === 'production';

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
      /* Fixes a problem with isotope dependency resolution */
      'masonry': 'masonry-layout',
      'isotope': 'isotope-layout'
    }
  },
  module: {
    preLoaders: [
      { /* Lint JavaScript */
        test: /\.jsx?$/,
        include: /dev/,
        loader: 'eslint'
      }
    ],
    loaders: [
      { /* Angular HTML Templates */
        test: /\.html$/,
        loader: 'raw'
      },
      { /* Compile Sass and extract as separate file */
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      { /* WOFF Fonts */
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[hash].[ext]'
      },
      { /* TTF Fonts */
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[hash].[ext]'
      },
      { /* EOT Fonts */
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=assets/fonts/[name].[hash].[ext]'
      },
      { /* SVG Fonts */
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[name].[hash].[ext]'}
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
    ]),
    new CleanWebpackPlugin(['dist'])
  ]
};

/**
 * Production Config Options
 */
if(isProd) {
  /* Work from Firebase in Production */
  config.module.loaders.push({
    test: /app.config\.js$/,
    loader: 'string-replace',
    query: {
      search: 'true',
      replace: 'false'
    }
  });
}

module.exports = config;
