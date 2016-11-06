import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Root from './components/Root';
import Next1 from './components/Next1';
import Login from './containers/Login';

export default (
    <Route component={ Root } path="/" >
        <IndexRoute component={Next1}/>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Next1} />
    </Route>
);
