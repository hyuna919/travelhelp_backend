var express = require('express');
var http = require('http');
var bodyParser= require('body-parser');
var app = express();

var userRouter = require('./routes/users');
var postRouter = require('./routes/posts');
var boardRouter = require('./routes/board');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/board', boardRouter);



module.exports = app;