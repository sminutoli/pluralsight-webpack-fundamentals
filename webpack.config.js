var path = require('path');

module.exports = {
  context: path.resolve('src'),
  
  /*
  Puede ser un array o un object en caso de utilizar distintos entry points
  */
  entry:[
    './app.js'
  ],

  output:{
    path: path.resolve('build/js'),
    publicPath: 'public/assets/js',
    filename: 'bundle.js' //si el output usa [name].js, genera un archivo que coincide con el entry point usado
  },
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
      }
    ]
  },
  resolve:{
    extensions: ['', '.js']
  }

}