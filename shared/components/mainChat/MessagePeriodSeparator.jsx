import React from 'react';
import './MessagePeriodSeparator.scss';

const MessagePeriodSeparator = ({time}) => {
    return (
        <div className="MessagePeriodSeparator">
            <span>{time}</span>
        </div>
    );
};

export default MessagePeriodSeparator;
