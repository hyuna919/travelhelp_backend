const express    = require('express');
const mysql = require('mysql')
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const app = express();


var list = new Promise(function(resolve, reject){
        connection.query('SELECT * from Users', (error, rows) => {
                    if (error) {console.log('errorrrrr');}                    
                    resolve(rows);  
        });       
           
});

module.exports=list;