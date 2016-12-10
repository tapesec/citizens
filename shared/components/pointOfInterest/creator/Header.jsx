import React, { PropTypes } from 'react';

const Header = ({ title, close }) => {
    return (
        <div className="Header">
            { title }
            <span style={{ cursor: 'pointer' }}
                onClick={close}
                className="glyphicon glyphicon-remove pull-right"></span>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    close: PropTypes.func
};

export default Header;
