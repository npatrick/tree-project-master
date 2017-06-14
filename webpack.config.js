module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: __dirname + '/src/client/public',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  // This is what enables users to leave off the extension when importing:
  // import File from '../path/to/file'
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js", ".json", ".jsx"]
  }
};
