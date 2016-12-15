import co from 'co';

import UserConnector from '../connector/User.js';

class UserCtrl {

    static get(req, res, next) {
        co(function *() {
            try {
                const user = yield new UserConnector().get(req.query);
                res.status(200).send(user);
            } catch (err) {
                console.log(err, 'sdsd');
                next(err);
            }
        }).catch(function (err) {
            console.log(err, 'error');
        });
    }
}

export default UserCtrl;
