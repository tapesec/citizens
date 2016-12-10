import React, { PropTypes } from 'react';

import './WidgetPicker.scss';

const WidgetPicker = ({ selectWidget }) => {

    return (
        <div className="WidgetPicker">
            <div className="module" onClick={() => selectWidget('INFORMATION_PANEL')} >
                <div className="icon-module">
                    <span className="glyphicon glyphicon-info-sign"></span>
                </div>
                <span className="module-label">Mur d'information</span>
            </div>


        </div>
    );
};

WidgetPicker.propTypes = {
    selectWidget: PropTypes.func
};

export default WidgetPicker;
