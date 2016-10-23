var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./../webpack.config-dev');
config.entry.unshift("webpack-dev-server/client?http://localhost:1234/", "webpack/hot/only-dev-server");
var compiler = webpack(config);

new WebpackDevServer(compiler, {
   hot: true,
   historyApiFallback: true,
   //headers: { 'Access-Control-Allow-Origin': '*' },
   //contentBase: '/public/',
   publicPath: config.output.publicPath

}).listen(1234, 'localhost', function (err, result) {
   if (err) {
     console.log(err);
   }

   console.log('Listening at localhost:1234');
});
