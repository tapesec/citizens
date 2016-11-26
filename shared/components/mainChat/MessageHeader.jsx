import React from 'react';

const MessageHeader = ({ author, time }) => {
    return (
        <span className="message-header"><span>{ author }</span> <span>{ time }</span></span>
    );
};

export default MessageHeader;
