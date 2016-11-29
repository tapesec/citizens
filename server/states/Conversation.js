import API from '../../shared/api/';
import co from 'co';

export default class Conversation {

    constructor() {
        this.conversation = {};
    }

    getLastMessages() {
        co(function *() {
            try {
                const listMessages = yield API.getConversation();
                const listAuthorIds = listMessages.map((message) => {
                    return message.authorId;
                });

            } catch (err) {
                return false;
            }
        }).catch(function(err) {
            console.log(err, 'error');
        });
    }
}
