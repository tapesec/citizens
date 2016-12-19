import db from '../bdd.js';

const users = db.get('users');

module.exports = {
    save,
    get
};

function save(data) {
    return users.insert(data);
}

function get(query) {
    return users.findOne(query);
}

function getAll(params={}) {
    const query = { ...params, removed: false };
    return users.find(query);
}