var webpack = require('webpack')

var options = {
  style: true,
  libraryDirectory: 'lib',  // default: lib
  libraryName: 'antd'            // default: antd
}

module.exports = {
  entry: {
    login: './src/pages/login.js',
    app: './src/pages/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { 
        test: /.less/, 
        loader: 'style-loader!css-loader!less-loader' 
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }
    ]
  },
  clearBeforeBuild: true,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  babel: {
    plugins: [['antd', options]]
  }
}
