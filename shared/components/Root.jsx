import React from 'react';
import NavbarTop from './../containers/NavbarTop';

class Root extends React.Component {

    render() {
        return (
            <div>
                <NavbarTop />
                { this.props.children }
            </div>
        );
    }
}

export default Root;
