import React from 'react';
import NavbarTop from './../containers/NavbarTop';

import './Root.scss';

class Root extends React.Component {

    render() {
        return (
            <div className="Root">
                <NavbarTop />
                { this.props.children }
            </div>
        );
    }
}

export default Root;
