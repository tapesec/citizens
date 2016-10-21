import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../shared/routes';
import configureStore from './store/configureStore.js';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
import DevTools from '../shared/containers/DevTools';

render((
	<Provider store={store}>
		<div>
			<DevTools />
			<Router children={routes} history={browserHistory} />
		</div>
	</Provider>), 
  	document.getElementById('app')
)