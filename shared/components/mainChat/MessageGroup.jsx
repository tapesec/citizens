import React from 'react';
import MessageHeader from './MessageHeader';
import MessageLine from './MessageLine';

import './MessageGroup.scss';

const MessageGroup = () => {

    return (
        <div className="MessageGroup">
            <MessageHeader author="Lionnel" time={'12:14'} />
            <MessageLine content="Voici un message dsoids osifso fjfsdfosfe sdonfd fhof ohfo fhp fj fjpfof fjf fijf sdoifjs fsoidjfsdoif nfjfkfj odfodshofi sdojf osn" edited={false} />
            <MessageLine content="Un autre sur une autre ligne" edited={true} />
        </div>
    );
};

export default MessageGroup;
