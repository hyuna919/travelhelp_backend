const express = require('express');
const router = express.Router();
const Post = require('../models').Post;

let jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt');

router.use(express.json())


router.post('/writePost',async function(req, res, next){
    let approve ={'response':''};
    let token = req.body.accessToken;
    let decoded_id;
    
    try{
        if(token!='undefine'){
            decoded_id = jwt.verify(token, secret);
        }
        await Post.create({
            writer_id:decoded_id.id,
            title:req.body.title,
            date:req.body.date,
            airport:req.body.airport,
            content:req.body.content,
            country:"Germany"
       });
       approve.response='OK'
    }catch(err){
        console.log("등록에러"+err.name+", "+err.message);
        approve.response = 'FALSE';
        return res.status(500).send(approve);
    }


    return res.status(200).send(approve);
});

router.post('/updatePost',async function(req, res, next){
    let approve ={'response':''};
    let token = req.body.accessToken;
    let decoded_id;
    try{
        if(typeof token !== 'undefined'){
            decoded_id = jwt.verify(token, secret);
        }
        await Post.update({
            date:req.body.date,
            airport:req.body.airport,
            content:req.body.content
            },{where:{id:req.body.post_id, writer_id:decoded_id.id}}             
        );
       approve.response='OK'
    }catch(err){
        console.log("수정에러"+err.name+", "+err.message);
        approve.response = 'FALSE';
        return res.status(500).send(approve);
    }


    return res.status(200).send(approve);
});

router.post('/deletePost',async function(req, res, next){
    console.log('두번째 미들웨어');
    let approve =false;
    let token = req.body.accessToken;
    let decoded_id;
    try{
        if(typeof token !== 'undefined'){
            decoded_id = jwt.verify(token, secret);
        }
        

        await Post.destroy({where:{id:req.body.id, writer_id:decoded_id}});
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
        approve.approve = 'FALSE';
        return res.status(500).send(approve);
    }


    return res.status(200).send("OK");
});


module.exports = router;