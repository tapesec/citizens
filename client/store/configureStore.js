import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import redirectMiddleware from '../middlewares/redirect';
import reducer from '../reducers/';
import DevTools from '../../shared/containers/DevTools';

import { init } from '../sagas/';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    //console.log(preloadedState, 'pre loaded');
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        preloadedState,
        compose(
            applyMiddleware(
                redirectMiddleware,
                thunkMiddleware,
                loggerMiddleware,
                sagaMiddleware
            ),
            // Required! Enable Redux DevTools with the monitors you chose
            DevTools.instrument()
        )
    );
    //console.log(store, 'store');
    sagaMiddleware.run(init);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
        );
    }

    return store;
}
