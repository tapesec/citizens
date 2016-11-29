import request from 'superagent';
import * as constant from '../constants/';

export default {
    postCredentials,
    requestLogout,
    getConversation
};

function postCredentials(credentials) {
    return new Promise((resolve, reject) => {
        request
            .post(constant.AUTH)
            .send(credentials)
            .end((err, res) => {
                if (err) reject(err);
                else resolve(res.body);
            });
    });
}

function requestLogout() {
    return new Promise(function(resolve, reject) {
        request
            .get(constant.LOGOUT)
            .end((err) => {
                if (err) reject(err);
                else resolve();
            });
    });
}

function getConversation() {
    return new Promise(function(resolve, reject) {
        request
            .get(constant.MESSAGES)
            .end((err) => {
                if (err) reject(err);
                else resolve();
            });
    });
}
