//import * as c from '../constants/';
import request from 'superagent';
class Information {

    constructor() {
        this.base = 'http://localhost:3004';
        this.uri = '/users';
    }

    get(query) {
        console.log(this.base+this.uri, query, '?');
        return new Promise((resolve, reject) => {
            request
                .get(this.base + this.uri)
                .query(query)
                .end((err, res) => {
                    if (err) reject(err.message);
                    else {
                        console.log(res.body, 'res ---> from user MS');
                        resolve(res.body);
                    }
                });
        });
    }

}
export default Information;
