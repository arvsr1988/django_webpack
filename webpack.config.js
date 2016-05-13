var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker')
module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
          'webpack/hot/only-dev-server',
          './client/client.js'
        ],
  output: {
    path: require('path').resolve('./assets/bundles'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/assets/bundles/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  }
}
