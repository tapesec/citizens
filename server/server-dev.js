var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./../configs/webpack.config-dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(1234, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:1234/');
});