import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../shared/routes';
import configureStore from './store/configureStore';
import { NONE } from '../shared/constants/pointOfInterest';

const clientPreloadedState = {
    user: {
        jwt: null,
        accountName: '',
        isLogIn: false
    },
    pointOfInterestCreationWindow: {
        opened: false,
        widgetSelected: NONE,
        data: null,
        editMode: false
    }
};
const preloadedState = window.__PRELOADED_STATE__ || clientPreloadedState;

const store = configureStore(preloadedState);
import DevTools from '../shared/containers/DevTools';

import './main.scss';

render((
    <Provider store={store}>
        <div style={{height: '100%'}} >
            <DevTools />
            <Router children={routes} history={browserHistory} />
        </div>
    </Provider>),
    document.getElementById('app')
);
