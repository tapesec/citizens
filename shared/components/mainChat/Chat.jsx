import React from 'react';
import MessagesList from './MessagesList';
import ChatInput from './ChatInput';

import './Chat.scss';

class Chat extends React.Component {
    render() {
        return(
            <div className="Chat clearfix">
                <MessagesList />
                <ChatInput />
            </div>
        );
    }
}

export default Chat;
