const express    = require('express');
const mysql = require('mysql')
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const app = express();


var getUserList = new Promise(function(resolve, reject){
        connection.query('SELECT * from Users', (error, rows) => {
                    if (error) throw error;                 
                    resolve(rows);  
        });       
           
});

var insertPost = new Promise(title, date, airport, user, content, function(resolve, reject){
        var sql = 'INSERT INTO post(title, date, airport, user, content) VALUES(?,?,?,?)';
        var params = [title, date, airport, user, content];
        connection.query(sql, params, (error, rows, fields) => {
                    if (error) throw error;                 
                    resolve("추가완료");  
        });       
});

var updatePost = new Promise(function(resolve, reject){
        connection.query('UPDATE VALUES', (error, rows) => {
                    if (error) throw error;                 
                    resolve(rows);  
        });       
});

var deletePost = new Promise(function(resolve, reject){
        connection.query('DELETE', (error, rows) => {
                    if (error) throw error;                 
                    resolve(rows);  
        });       
});

module.exports.getUserList=getUserList;
module.exports.insertPost=insertPost;
module.exports.updatePost=updatePost;
module.exports.deletePost=deletePost;