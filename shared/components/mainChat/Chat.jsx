import React from 'react';
import MessagesList from './MessagesList';
import ChatInput from './ChatInput';

class Chat extends React.Component {
    render() {
        return(
            <div className="col-md-9">
                <MessagesList />
                <ChatInput />
            </div>
        );
    }
}

export default Chat;
