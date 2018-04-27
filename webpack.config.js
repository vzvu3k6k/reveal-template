const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png)$/,
        loaders: 'url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: require('./package.json').title,
      template: 'src/template.html',
      main: {
        "entry": './index.js'
      },
    })
  ]
};
