var NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var isDev = NODE_ENV === 'development';
var isProd = NODE_ENV === 'production';

var config = {
  context: path.join(__dirname, '/dev/app'),
  entry: [
    './app.js'
  ],
  output: {
    path: path.join(__dirname + '/dist'),
    filename: '[hash].bundle.js'
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
      { /* Compile ES6 and JSX to ES5 */
        test: /\.jsx?$/,
        loader: 'babel'
      },
      { /* Compile Sass and extract as separate file */
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      { /* WOFF Fonts */
        test: /\.(woff|woff2)(\?[\s\S]+)?$/,
        loader: 'url?mimetype=application/font-woff&name=assets/fonts/[hash].[name].[ext]'
      },
      { /* TTF, EOT & SVG Fonts */
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?name=assets/fonts/[hash].[name].[ext]'
      }
    ]
  },
  postcss: function() {
    return [require('autoprefixer')({})];
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/dev/app/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[contenthash].[name].css'),
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

/**
 * Development Config Options
 **/
 if(isDev) {
   config.devtool = 'inline-source-map';
   config.module.loaders = [
     { /* Expose React to devtools */
       test: require.resolve('react'),
       loader: 'expose?React'
     }
   ].concat(config.module.loaders);
 }

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
  /* Optimise Output */
  config.plugins = [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ].concat(config.plugins);
}

module.exports = config;
