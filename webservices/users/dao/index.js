import db from '../bdd.js';

const users = db.get('users');


export function save(data) {
    return users.insert(data);
}

export function get(query) {
    return users.findOne(query);
}