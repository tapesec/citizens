import React from 'react';
import './MenuLeft.scss';

class MenuLeft extends React.Component {

    render() {
        return (
            <div className="MenuLeft">
                <ul className="list-group">
                    <a className="list-group-item">Alice 2</a>
                    <a className="list-group-item">Bob</a>
                </ul>
            </div>
        );
    }
}

export default MenuLeft;
