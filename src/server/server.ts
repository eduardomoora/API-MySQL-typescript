
//imports 
import express = require('express');
import path = require('path');


export default class Server {


  //variables
     public app: express.Application;
     public port:number;

    constructor(port:number) {
       this.port=port;
       this.app= express();
    }
//instanc of method
    static init (port:number){
        return new Server(port);
    }

//public folder
    private publicFolder() {
        const publicPath= path.resolve(__dirname,'../public');
        this.app.use(express.static(publicPath));
    }
//run the server
    start(callback:Function){

        this.app.listen(this.port,callback());
        this.publicFolder();
    }


}