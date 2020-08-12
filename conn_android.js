var express = require('express');
var http = require('http');
var bodyParser= require('body-parser');
var app = express();
const db = require('./conn_db.js');

app.set('port',process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//db에서 계정 목록 가져오는 함수
var getUserList = function(){
    return new Promise(function(res, rej){
        db.then(function(resolve){
            res(resolve);
        })
    });
}

//사용자가 입력한 값과 계정 목록 비교해 일치하는지 확인
var login = function(paramId, paramPassword){
    return new Promise(function(resolve, rej){
        approve_id = 'false';
        approve_pw = 'false';
        db.then(function(res){
            i=0;
            
            while(i<res.length){
                if(paramId == res[i].id) {
                    approve_id = 'OK';
                    let j = i;
                    if(paramPassword == res[j].password) {
                        console.log("pw");
                        approve_pw = 'OK';
                        break;
                    }
                }
                i++;
            }
        });
        
        db.then(function(res){
            console.log("aaaaaaa",approve_id,approve_pw);
            resolve({approve_id,approve_pw});
        });
    })
}

//첫 번째 미들웨어
app.use(async function(req, res, next) {

    console.log('첫 번째 미들웨어 호출 됨');
    var approve ={'approve_id':'NO','approve_pw':'NO'};
    var list = await getUserList();


    var paramId = req.body.id;
    var paramPassword = req.body.password;
    console.log('id : '+paramId+'  pw : '+paramPassword);


    approve = await login(paramId, paramPassword);
    console.log("bbbbbbbbb",approve);


    res.send(approve);

});

module.exports = app;

/*
var server = http.createServer(app).listen(app.get('port'),function(){
   console.log("익스프레스로 웹 서버를 실행함 : "+ app.get('port')); 
});*/