import co from 'co';

import MsgConnector from '../bdd-connector/Messages.js';

class MessageCtrl {

    static writeMessage(req, res, next) {
        co(function *() {
            try {
                yield new MsgConnector().save(req.body);
                req.socketManager.get(req.auth.userId).broadcast.emit('MESSAGE:GENERAL:NEW', req.body);
                res.status(201).send();
            } catch (err) {
                next(err);
            }
        }).catch(function(err) {
            console.log(err, 'error');
        });
    }
}

export default MessageCtrl;
