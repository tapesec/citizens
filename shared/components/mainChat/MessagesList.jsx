import React from 'react';

import MessageGroup from './MessageGroup';
import MessagePeriodSeparator from './MessagePeriodSeparator';

import './MessageList.scss';

const MessagesList = () => {


    return (
        <div className="MessagesList">
            <MessageGroup key={1}/>
            <MessageGroup key={2} />
            <MessagePeriodSeparator time="Jeudi 23 décembre" />
            <MessageGroup key={3}/>
            <MessageGroup key={4}/>
        </div>
    );
};

export default MessagesList;
