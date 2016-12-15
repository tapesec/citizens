class SocketManager {

    constructor() {
        this.socketList = {};
    }

    add(socket) {
        this.socketList[socket.id] = socket;
    }

    get(socketId) {
        return this.socketList[socketId];
    }

    getAll() {
        return this.socketList;
    }

    remove(socketId) {
        delete this.socketList[socketId];
    }

}

export default SocketManager;
