import React from 'react';

const ChatInput = () => {
    return (
            <form>
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                        <button className="btn btn-success" type="submit">Envoyer</button>
                    </span>
                </div>
            </form>
    );
};

export default ChatInput;
