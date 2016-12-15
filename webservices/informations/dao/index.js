import db from '../bdd.js';

const informations = db.get('informations');


export function save(data) {
    return informations.insert(data);
}