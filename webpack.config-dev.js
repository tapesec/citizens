var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var BUILD_DIR = path.join(__dirname, 'build/server/public');
var CLIENT = path.resolve(__dirname, 'client');
var SHARED = path.resolve(__dirname, 'shared');


module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:1234', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
        'bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=' + __dirname + '/.bootstraprc!bootstrap-loader/no-op.js',
        CLIENT + '/entry.jsx',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css', { allChunks: true }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.(jsx|js)$/, loaders: ['react-hot', 'babel'], include: [CLIENT, SHARED] },
            //{ test: /\.less$/, loader: 'style!css!less' },
            //{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.scss/, loader: ExtractTextPlugin.extract('css!sass'), include: [CLIENT, SHARED] },
            //{ test: /\.scss$/, loaders: ['isomorphic-style-loader', 'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]', 'postcss-loader']},
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
            { test: /\.eot$/,    loader: 'file-loader' },
            { test: /\.svg$/,    loader: 'file-loader' }
        ]
    }
};
