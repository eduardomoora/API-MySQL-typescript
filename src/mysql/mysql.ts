
import mysql = require('mysql');



export default class MySQL{

private static _instance:MySQL;
connection:mysql.Connection;
conected:boolean=false;


constructor(){

    console.log('Class init')

    this.connection= mysql.createConnection({
        host     : 'localhost',
        user     : 'node_user',
        password : '123456',
        database : 'node_db'
      });


      this.conectarDB();
}


public static get instance(){

    return this._instance || (this._instance = new this());
}

static ejecutaQuery(query:string,callback:Function){

    this.instance.connection.query(query,(err,results:Object[],fields)=>{

            if(err){
                console.log('error en query');
                console.log('error: '+ err);
                return callback(err);
            }

            callback(null,results);
                
            



    })
}

private conectarDB(){
    this.connection.connect((err:mysql.MysqlError)=>{
     


            if(err){
                console.log(err.message);
                return
            }
            this.conected=true;

            console.log(' Successfully Connection');

    });

}


}






