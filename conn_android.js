var express = require('express');
var http = require('http');
var bodyParser= require('body-parser');
var app = express();

var userRouter = require('./routes/users');
var postRouter = require('./routes/posts');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);



module.exports = app;