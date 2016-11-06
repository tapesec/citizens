import React from 'react';
import NavbarTop from './../containers/NavbarTop';

class Root extends React.Component {

    render() {
        return (
            <div>
                <NavbarTop />
                <h1>A citizen is born</h1>
                { this.props.children }
            </div>
        );
    }
}

export default Root;
