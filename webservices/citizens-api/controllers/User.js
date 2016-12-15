import co from 'co';

import { User } from '../bdd-connector/';

class UserCtrl {

    static get(req, res, next) {
        co(function *() {
            try {
                const user = yield User.get(req.query);
                if (!user) {
                    res.status(204).end();
                } else res.send(user);
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
