var express = require('express');
var router = express.Router();
var React = require('react');
var Redux = require('redux');
import { match, RouterContext } from 'react-router';
var ReactDOMServer = require('react-dom/server');
var renderFullPage = require('./../templates/main');
var konsole = require('./../utils/CustomLog');
import routes from '../../shared/routes.js';

/* GET home page. */
router.get('/', function(req, res, next) {
	
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
		
		const preloadedState = {};
		const store = Redux.createStore((state) =>  state, preloadedState);

		var content = ReactDOMServer.renderToString(<RouterContext {...props}/>); //React.renderToString(<Handler />);
		
		konsole.info("dev", content);//res.render('index', { content: content });
		const finalState = store.getState();
		res.send(renderFullPage(content, finalState));
	});

	/*const store = Redux.createStore(citizensApp);
	const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>);

	const preloadedState = store.getState();

	konsole.info('dev', preloadedState);
	res.send(renderFullPage(html, preloadedState));*/
});




module.exports = router;
