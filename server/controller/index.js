import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { match, RouterContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import renderFullPage from './../templates/main';
import konsole from './../utils/CustomLog';
import reducer from './../../client/reducers';
import routes from '../../shared/routes.js';
import DevTools from '../../shared/containers/DevTools.jsx';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

/* GET home page. */
const isomorphicMiddleware = function(req, res) {

    match({ routes: routes, location: req.url }, (err, redirectLocation, props) => {

        if (err) {
            res.status(500).send(err.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
            // console.log(req.originalUrl, 'url');

            const preloadedState = {
                user: {
                    isLogIn: req.session && req.session.jwt? true : false,
                    accountName: req.session && req.session.accountName? req.session.accountName : null,
                    jwt: req.session? req.session.jwt : null
                }
            };
            const loggerMiddleware = createLogger();
            const store = createStore(reducer, preloadedState,
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
            konsole.log('test server rendering -->' + req.url);
            res.send(renderFullPage(content, finalState));
        } else {
            res.status(404).send('Not found');
        }
    });
};

module.exports = isomorphicMiddleware;
