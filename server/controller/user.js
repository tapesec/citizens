import co from 'co';
import jwt from 'jsonwebtoken';
import request from 'superagent';

class UserCtrl {

    static get(req, res, next) {
        co(function *() {
            try {
                const response = yield request.get(`http://localhost:3002/users`).query(req.body);
                const user = response.body;
                const token = jwt.sign(user, process.env.SECRET_PASSPHRASE);
                req.session.jwt = token;
                req.session.accountName = user.accountName;
                req.session.isLogIn = true;
                req.session._id = user._id;

                res.status(201).send({
                    jwt: token,
                    isLogIn: true,
                    accountName: user.accountName,
                    _id: user._id
                });


            } catch (err) {
                res.status(err.status).send();
            }
        }).catch(function (err) {
            console.log(err, 'error');
        });
    }
}

export default UserCtrl;