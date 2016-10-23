import React from 'react';
import { Link } from 'react-router';

class Root extends React.Component {

		render() {
			return (
				<div>
					<h1>A citizen is born</h1>
					<Link to="/page-1">Page 1</Link>
					<Link to="/page-2">Page 2</Link>
					{ this.props.children }
				</div>
			)
		};
}

export default Root;
