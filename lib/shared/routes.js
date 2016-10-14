'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Root = require('./components/Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(_reactRouter.Route, { component: _Root2.default, path: '/' });