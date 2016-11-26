import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Root from './components/Root';
import Area1 from './components/areas/Area1';
import Login from './containers/Login';

export default (
    <Route component={ Root } path="/" >
        <IndexRoute component={Area1}/>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Area1} />
    </Route>
);
