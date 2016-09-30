var express = require('express');
var router = express.Router();
var React = require('react');
var Redux = require('redux');
var ReactDOMServer = require('react-dom/server');
var renderFullPage = require('./../templates/main');
var konsole = require('./../utils/CustomLog');


/* GET home page. */
router.get('/', function(req, res, next) {

	const store = Redux.createStore(citizensApp);
	const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>);

	const preloadedState = store.getState();

	konsole.info('dev', preloadedState);
	res.send(renderFullPage(html, preloadedState));
});




module.exports = router;
