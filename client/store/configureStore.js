import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from '../reducers/';
import DevTools from '../../shared/containers/DevTools';

const loggerMiddleware = createLogger()


export default function configureStore(preloadedState) {
  	const store = createStore(
    	reducer,
    	preloadedState,
    	compose(
    		applyMiddleware(
      			thunkMiddleware,
      			loggerMiddleware
    		),
			// Required! Enable Redux DevTools with the monitors you chose
			DevTools.instrument()
		)
    	
  	);

  	// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
	if (module.hot) {
	    module.hot.accept('../reducers', () =>
	    	store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
	    );
	}

  return store;
}