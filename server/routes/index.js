var express = require('express');
var router = express.Router();
var React = require('react');
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { match, RouterContext } from 'react-router';
var ReactDOMServer = require('react-dom/server');
var renderFullPage = require('./../templates/main');
var konsole = require('./../utils/CustomLog');
import routes from '../../shared/routes.js';
import DevTools from '../../shared/containers/DevTools.jsx';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

/* GET home page. */
router.get('/', function(req, res, next) {
	
	match({ routes: routes, location: req.baseUrl }, (err, redirect, props) => {
		
		const preloadedState = { hello: "world"};
		const loggerMiddleware = createLogger();
		const store = createStore((state) =>  state, preloadedState,
    	compose(applyMiddleware(
      		thunkMiddleware,
      		loggerMiddleware
    	), DevTools.instrument()));

		var content = ReactDOMServer.renderToString(
			<Provider store={store}>
				<div>
					<DevTools />
					<RouterContext {...props}/>
				</div>
			</Provider>
		);
		
		const finalState = store.getState();
		res.send(renderFullPage(content, finalState));
	});
});

module.exports = router;
