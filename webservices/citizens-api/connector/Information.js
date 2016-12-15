//import * as c from '../constants/';
import request from 'superagent';
class Information {

    constructor() {
        this.base = 'http://localhost:3003';
        this.uri = '/informations';
    }

    save(data) {
        return request.post(this.base + this.uri).send(data);
    }

}
export default Information;
