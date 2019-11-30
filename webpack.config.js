const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development',
};