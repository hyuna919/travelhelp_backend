var express = require('express');
var http = require('http');
var bodyParser= require('body-parser');
var app = express();
const db = require('./conn_db.js');
const userList = db.getUserList;
const insertPost = db.insertPost;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




//사용자가 입력한 값과 계정 목록 비교해 일치하는지 확인
var login = function(paramId, paramPassword){
    return new Promise(function(resolve, rej){
        approve_id = 'false';
        approve_pw = 'false';
        userList.then(function(res){
            i=0;
            
            while(i<res.length){
                if(paramId == res[i].id) {
                    approve_id = 'OK';
                    let j = i;
                    if(paramPassword == res[j].password) {
                        approve_pw = 'OK';
                        break;
                    }
                }
                i++;
            }
        });
        
        userList.then(function(res){
            resolve({approve_id,approve_pw});
        });
    })
}


var writePost= function(){
    return new Promise(function(res, rej){

    });
}

//첫 번째 미들웨어
app.use(async function(req, res, next) {

    console.log('첫 번째 미들웨어 호출 됨');
    let approve ={'approve_id':'NO','approve_pw':'NO'};


    let paramId = req.body.id;
    let paramPassword = req.body.password;

    approve = await login(paramId, paramPassword);

    res.send(approve);

    next();
});

app.use(async function(req, res, next){
    console.log('두번째 미들웨어');
    let approve ={'post_id':'', 'title':'', 'date':'', 'airport':'', 'content':''};

    let paramId = req.body.id;
    let paramTitle = req.body.title;
    let paramDate = req.body.date;
    let paramAirport = req.body.airport;
    let paramContent = req.body.content;

    approve = await login(paramId, paramTitle, paramDate, paramAirport, paramContent);

    next();
});

module.exports = app;