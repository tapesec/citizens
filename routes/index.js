var express = require('express');
var router = express.Router();
var React = require('react');
var Redux = require('redux');
var ReactDOMServer = require('react-dom/server');
var renderFullPage = require('./../templates/main');
var konsole = require('./../utils/CustomLog');
var reducer = require('./../client/reducers/');
var CitizenApp = require('./../client/containers/CitizenApp.jsx');

/* GET home page. */
router.get('/', function(req, res, next) {

	const preloadedState = {};

	const store = Redux.createStore(reducer, preloadedState);
	const html = ReactDOMServer.renderToString(<Provider store={store}><CitizenApp /></Provider>);

	const finalState = store.getState();

	konsole.info('dev', preloadedState);
	res.send(renderFullPage(html, finalState));
});




module.exports = router;
