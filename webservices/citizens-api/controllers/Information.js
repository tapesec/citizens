import co from 'co';

import { save } from '../bdd-connector/Information.js';

class InformationCtrl {

    static writeInformation(req, res, next) {
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
}

export default InformationCtrl;
