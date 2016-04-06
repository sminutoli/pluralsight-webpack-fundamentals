var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('src'),
  
  /*
  Puede ser un array o un object en caso de utilizar distintos entry points
  */
  entry:[
    './app.js'
  ],

  output:{
    path: path.resolve('dist/'),
    publicPath: 'public/assets/',
    filename: 'bundle.js' //si el output usa [name].js, genera un archivo que coincide con el entry point usado
  },

  plugins: [
    new ExtractPlugin('styles.css')
  ],

  devServer: {
    contentBase: 'public',
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
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
        exclude: 'node_modules'
      },
      {
        loader: ExtractPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader'), //el orden es inverso al pipe() acá
        test: /\.scss$/,
        exclude: 'node_modules'
      }
    ]
  },
  resolve:{
    extensions: ['', '.js']
  }

}