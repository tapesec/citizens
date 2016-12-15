//import * as c from '../constants/';
import request from 'superagent';
class Message  {

    constructor() {
        this.base = 'http://localhost:3003';
        this.uri = '/messages';
    }

    save(data) {
        return request.post(this.base+this.uri).send(data);
    }

    getAll() {
        return request.get(this.base+this.uri);
    }
}

export default Message;
