'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore.js';
import CitizensApp from 'CitizensApp.jsx';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

export default class Root extends React.Component {
  	render() {
    	return (
      		<Provider store={store}>
        		<CitizensApp />
      		</Provider>
    	);
  	}
}