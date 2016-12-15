import db from '../bdd.js';

const users = db.get('users');

export default {
    save,
    get
};

function save(data) {
    return users.insert(data);
}

function get(query) {
    return users.findOne(query);
}