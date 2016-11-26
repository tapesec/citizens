import React from 'react';

import MessageGroup from './MessageGroup';
import MessagePeriodSeparator from './MessagePeriodSeparator';

import './MessageList.scss';

const MessagesList = () => {

    return (
        <div className="MessagesList">
            <MessageGroup />
            <MessageGroup />
            <MessagePeriodSeparator time="Jeudi 23 décembre" />
            <MessageGroup />
            <MessageGroup />
        </div>
    );
};

export default MessagesList;
