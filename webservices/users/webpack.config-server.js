var webpack = require('webpack');

var path = require('path');
var BUILD = path.join(__dirname, 'build');

var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    devtool: 'source-map',
    externals: nodeModules,
    entry: [
        'babel-polyfill',
        './app.js',
    ],
    output: {
        path: path.join(BUILD, 'server'),
        filename: 'app.js',
        publicPath: '/',
        library: '',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{ test: /\.(jsx|js)$/, loaders: ['babel-loader'], exclude: '/node_modules/' }]
    },
    target: 'node',
    node: {
        __dirname  : false,
        __filename : false
    }
};
