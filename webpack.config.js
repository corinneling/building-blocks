const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    modal: './src/js/modal/index.js',
    multiSelectAccordion: './src/js/multi-select-accordion/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js' // to do: add content hashing -> filename: '[name]-[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'src/markup',to:'../'} 
    ]),
  ]
};