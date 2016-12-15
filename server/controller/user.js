import co from 'co';
import jwt from 'jsonwebtoken';
import API from '../../shared/api/';

class UserCtrl {

    static get(req, res, next) {
        co(function *() {
            try {
                const user = API.checkRegisteredUser(req.body);
                console.log(user, 'user');
                if (user) {
                    const token = jwt.sign(user, process.env.SECRET_PASSPHRASE);
                    req.session.jwt = token;
                    req.session.accountName = user.accountName;
                    req.session.isLogIn = true;

                    res.status(201).send({
                        jwt: token,
                        isLogIn: true,
                        accountName: user.accountName
                    });
                    res.status(201).send();
                } else {
                    res.status(401).send();
                }

            } catch (err) {
                next(err);
            }
        }).catch(function (err) {
            console.log(err, 'error');
        });
    }
}

export default UserCtrl;