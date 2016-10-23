var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.join(__dirname, 'server/public');
var CLIENT = path.resolve(__dirname, 'client');
var SHARED = path.resolve(__dirname, 'shared');

module.exports = {

	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:1234', // WebpackDevServer host and port
  	'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		CLIENT + '/entry.jsx'
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
  		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.(jsx|js)$/, loaders: ['react-hot', 'babel'], include: [CLIENT, SHARED] }
		]
	}
}
