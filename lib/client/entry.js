'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('../shared/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Route.run(_routes2.default, _reactRouter2.default.HistoryLocation, function (Handler, state) {
	_react2.default.render(_react2.default.createElement(Handler, null), document.getElementByd('app'));
});