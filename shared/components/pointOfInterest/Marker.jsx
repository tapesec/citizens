import React, { PropTypes } from 'react';

import './Marker.scss';

const Marker = ({ icon }) => {

    const MARKER_SIZE = 40;
    const greatPlaceStyle = {
        position: 'absolute',
        width: MARKER_SIZE,
        height: MARKER_SIZE,
        left: -MARKER_SIZE / 2,
        top: -MARKER_SIZE / 2,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: MARKER_SIZE / 2,
        fontSize: '28px',
        textAlign: 'center'
    };

    return (
        <div className="Marker" style={greatPlaceStyle}>
            <span
                className={`glyphicon glyphicon-${icon}`}
                style={{ top: '4px'}}
            ></span>
        </div>
    );

};

Marker.propTypes = {
    icon: PropTypes.string
};

export default Marker;
