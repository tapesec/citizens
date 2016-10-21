import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Root from './components/Root';
import Next1 from './components/Next1';
import Next2 from './components/Next2';

export default (
	<Route component={ Root } path="/" >
		
		<Route path="/page-1" component={Next1} />
		<Route path="/page-2" component={Next2} />
	</Route>
);