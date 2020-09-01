// const express    = require('express');
// const mysql = require('mysql')
// const dbconfig   = require('./config/database.js');
// const connection = mysql.createConnection(dbconfig);
// const app = express();


// var getUserList = new Promise(function(resolve, reject){
//         connection.query('SELECT * from Users', (error, rows) => {
//                     if (error) throw error;                 
//                     resolve(rows);  
//         });       
           
// });

// /* var insertPost = function(post_id, title, date, airport, content){
//         new Promise(function(resolve, reject){
//                 var sql = 'INSERT INTO post(post_id, title, date, airport, content) VALUES(?,?,?,?,?)';
//                 var params = [post_id, title, date, airport, content];
//                 connection.query(sql, params, (error, rows, fields) => {
//                         if (error) throw error;                 
//                         resolve("추가완료");  
//                 });       
//         });
// } */

// /* var updatePost = new Promise(function(resolve, reject){
//         connection.query('UPDATE post SET ', (error, rows) => {
//                     if (error) throw error;                 
//                     resolve(rows);  
//         });
// }); */

// /* var deletePost = new Promise(function(resolve, reject){
//          connection.query('UPDATE post SET ', (error, rows) => {
//                     if (error) throw error;                 
//                     resolve(rows);  
//         });    
// }); */

// module.exports.getUserList=getUserList;
// //module.exports.insertPost=insertPost;
// /* module.exports.updatePost=updatePost;
// module.exports.deletePost=deletePost; */