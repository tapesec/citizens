"use strict";

var _webpackDevServer = require("webpack-dev-server");

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfigDev = require("../../configs/webpack-config-dev.js");

var _webpackConfigDev2 = _interopRequireDefault(_webpackConfigDev);

var _CustomLog = require("./utils/CustomLog.js");

var _CustomLog2 = _interopRequireDefault(_CustomLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _webpackDevServer2.default((0, _webpack2.default)(_webpackConfigDev2.default), {
	publicPath: _webpackConfigDev2.default.output.publicPath,
	hot: true,
	stats: { colors: true }
});

server.listen(8080, "localhost", function (err) {
	console.log(err);
	_CustomLog2.default.info("dev", "Hot reload server started on port 8080 !");
});