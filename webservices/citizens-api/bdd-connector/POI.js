import db from '../bdd.js';

const pois = db.get('pois');

module.exports = {
    save,
    getAll
};

function save(data) {
    return pois.insert(data);
}

function getAll(params=null) {
    const query = {...params, removed: false };
    return pois.find(query);
}