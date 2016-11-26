import React from 'react';

import Chat from './Chat';
import MenuLeft from './MenuLeft';
import './MainChatContainer.scss';

class MainChatContainer extends React.Component {

    render() {
        return (
            <div className="MainChatContainer">
                <MenuLeft />
                <Chat />
            </div>
        );
    }
}

export default MainChatContainer;
