import db from '../bdd.js';

const informations = db.get('informations');

module.exports = {
    save,
    get
};

function save(data) {
    return informations.insert(data);
}

function get(data) {
    return informations.findOne(data);
}