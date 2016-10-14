'use strict';

var _reactRouter = require('react-router');

var _routes = require('../../shared/routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();
var React = require('react');
var Redux = require('redux');

var ReactDOMServer = require('react-dom/server');
var renderFullPage = require('./../templates/main');
var konsole = require('./../utils/CustomLog');


/* GET home page. */
router.get('/', function (req, res, next) {

	(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {

		var preloadedState = {};
		var store = Redux.createStore(function (state) {
			return state;
		}, preloadedState);

		var content = ReactDOMServer.renderToString(React.createElement(_reactRouter.RouterContext, props)); //React.renderToString(<Handler />);

		konsole.info("dev", content); //res.render('index', { content: content });
		var finalState = store.getState();
		res.send(renderFullPage(content, finalState));
	});

	/*const store = Redux.createStore(citizensApp);
 const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>);
 	const preloadedState = store.getState();
 	konsole.info('dev', preloadedState);
 res.send(renderFullPage(html, preloadedState));*/
});

module.exports = router;