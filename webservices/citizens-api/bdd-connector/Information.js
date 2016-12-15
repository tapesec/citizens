import db from '../bdd.js';

const informations = db.get('informations');

export default {
    save
}

function save(data) {
    return informations.insert(data);
}