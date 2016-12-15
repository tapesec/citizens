import request from 'superagent';
import _ from 'lodash';

import * as constant from '../constants/';

export default {
    postCredentials,
    requestLogout,
    getConversation,
    newInformationPanel,
    checkRegisteredUser
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

function newInformationPanel(payload, jwt) {
    return new Promise((resolve, reject) => {
        request
            .post(`http://localhost:3002${constant.WIDGET_INFORMATION_PANEL}`)
            .set('Authorization', `Bearer ${jwt}`)
            .send(payload)
            .end((err) => {
                if (err) reject(err);
                else resolve();
            });
    });
}



// call from server..
function checkRegisteredUser(credentials) {
    return new Promise((resolve, reject) => {
         request
            .get(`http://localhost:3002${constant.USER_MS}`)
            .query(credentials)
            .end((err, res) => {
                if (err) reject(`checkRegistered: ${err.message}`);
                else {
                    console.log('vide !!!', res.body);
                    if (_.isEmpty(res.body)) {
                        console.log('bla');
                        resolve(null);
                    } else resolve(res.body);
                }
            });
    });
}
