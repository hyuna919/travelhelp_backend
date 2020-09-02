var express = require('express');
const app = require('../conn_android');
var router = express.Router();
const User = require('../models').User;

let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

//로그인+로그인에 따른 토큰 발급
router.post('/login', async function(req, res, next){
    console.log("유저");
    let approve ={'approve_id':'NO'};

    let paramId = req.body.id;
    let paramPassword = req.body.password;

    let token = jwt.sign({
        id: paramId   // 토큰의 내용(payload)
      },
      secretObj.secret ,    // 비밀 키
      {
        expiresIn: '10m'    // 유효 시간은 5분
      })

    try{
        await User.findOne({where:{id:paramId}})
        .then(user=>{
            console.log(user)
            if(user.password==paramPassword){
                approve.approve_id='OK'
                res.cookie("user", token);
                res.json({token: token})
            }
        })
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
        res.status(500).send("fail");
    }
});

//회원가입
router.post('/signup', async function(req, res, next){
    console.log("회원가입");
    let approve ={'approve_id':'NO'};

    let paramId = req.body.id;
    let paramPassword = req.body.password;
    
    try{
        await User.create({
            id:paramId,
            password:paramPassword
       })
       approve.approve_id='OK'
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
    }


    return res.status(200).send(approve);
});

//회원가입시 아이디 중복확인
router.post('/signup/checkId', async function(req, res, next){
    console.log("회원가입");
    let approve ={'approve_id':'NO'};

    let paramId = req.body.id;
    
    try{
        await User.findOne({where:{id:paramId}})
        .then(user=>{
            if(user==null){
                approve.approve_id='OK'
            }
        })
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
    }


    return res.status(200).send(approve);
});

module.exports = router;