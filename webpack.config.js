const { resolve, join } = require('path');
const { IgnorePlugin } = require('webpack');
const path = require('path');

const moduleRoot = resolve(__dirname, '.');
const outputPath = join(moduleRoot, 'dist');

module.exports = {
  mode: 'production',
  entry: join(moduleRoot, 'src', 'index.js'),
  target: 'node',
  devtool: 'source-map',
  output: {
    path: outputPath,
    filename: 'index.js',
    library: 'web3-hd-wallet-provider',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: ['websocket'],
  resolve: {
    extensions: ['.node', 'json', '.loader.js', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }
    ]
  },
  plugins: [
    // ignore these plugins completely
    new IgnorePlugin(/^(?:electron|ws)$/)
  ]
};
