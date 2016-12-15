import co from 'co';

import {save, get} from '../dao/';

class UserCtrl {

    static add(req, res, next) {
        co(function *() {
            try {
                yield save(req.body);
                res.status(201).send();
            } catch (err) {
                next(err);
            }
        }).catch(function (err) {
            console.log(err, 'error');
        });
    }

    static get(req, res, next) {
        co(function *() {
            try {
                console.log('ici ?');
                const user = yield get(req.query);
                console.log(user, 'user from bdd ?');
                if (user) res.status(200).send(user);
                else res.status(204).end();
            } catch (err) {
                console.log('error db ?'+ err.message);
                next(err);
            }
        }).catch(function (err) {
            console.log(err, 'error');
        });
    }
}

export default UserCtrl;
