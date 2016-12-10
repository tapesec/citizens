import React from 'react';

const MessageContent = ({ content, edited }) => {
    return (
        <span className="message-content">{ content } { edited? ' (modifié)' : ''}</span>
    );
};

export default MessageContent;
