import React from 'react';
import MessageContent from './MessageContent';
import MessageOptions from './MessageOptions';

const MessageLine = ({ content, edited }) => {
    return (
        <div className="MessageLine">
            <MessageContent content={ content } edited={ edited } />
            <MessageOptions />
            <div className="clearfix"></div>
        </div>
    );
};

export default MessageLine;
