import co from 'co';

import {save} from '../dao/';

class InformationCtrl {

    static saveInformation(req, res, next) {
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
