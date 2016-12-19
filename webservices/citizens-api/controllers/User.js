import co from 'co';

const User = require('../bdd-connector/').User;

class UserCtrl {

    static get(req, res, next) {
        co(function *() {
            try {
                const user = yield User.get(req.query);
                console.log(user, 'user in api');
                if (!user) {
                    res.status(401).end();
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
