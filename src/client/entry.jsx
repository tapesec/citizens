import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

Route.run(routes, Router.HistoryLocation, (Handler, state) => {
	React.render(<Handler />, document.getElementByd('app'));
});