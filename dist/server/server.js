"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//imports 
const express = require("express");
const path = require("path");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    //instanc of method
    static init(port) {
        return new Server(port);
    }
    //public folder
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    //run the server
    start(callback) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    }
}
exports.default = Server;
