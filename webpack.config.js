module.exports = {
  entry: "./source/index.js",
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
