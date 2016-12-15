import db from '../bdd.js';

const pois = db.get('pois');


export function save(data) {
    return pois.insert(data);
}