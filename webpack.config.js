module.exports = {
  entry: "./source/client/index.js",
  output: {
    path: 'build/client',
    filename: "cuid.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
