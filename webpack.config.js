var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry:[
    './app.js'
  ],
  output:{
    path: path.resolve('build/js'),
    publicPath: 'public/assets/js',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    inline: true,
    port: 8080
  },
  module:{
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        query: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  resolve:{
    extensions: ['', '.js']
  }

}