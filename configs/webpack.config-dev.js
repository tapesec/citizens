var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, '/../lib/server/public');
var APP_DIR = path.resolve(__dirname, '/../client/src');

module.exports = {

	devtool: 'inline-source-map',
	entry: [
		APP_DIR + '/entry.jsx'
	],
	output: {
		path: BUILD_DIR,
		filename: 'app.js',
		publicPath: 'http://localhost:8080/'
	},
	// plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		//new webpack.NoErrorsPlugin()
	//],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.(jsx|js)$/, loaders: ['react-hot-loader/webpack', 'babel'], exclude: /node_modules/ }
		]
	}
}