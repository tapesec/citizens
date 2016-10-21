var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, '../server/public/');
var APP_DIR = path.resolve(__dirname, '../client/');

module.exports = {

	devtool: 'inline-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:1234', // WebpackDevServer host and port
  		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		APP_DIR + '/entry.jsx'
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
			{ test: /\.(jsx|js)$/, loaders: ['babel'], exclude: /node_modules/ }
		]
	}
}