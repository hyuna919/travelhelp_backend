const express = require('express');
const router = express.Router();
const Post = require('../models').Post;


router.post('/writePost',async function(req, res, next){
    let approve ={'response':''};

    try{
        await Post.create({
            writer_id:req.body.id,
            title:req.body.title,
            date:req.body.date,
            airport:req.body.airport,
            content:req.body.content,
            country:"Germany"
       });
       approve.response='OK'
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
        approve.response = 'FALSE';
        return res.status(500).send(approve);
    }


    return res.status(200).send(approve);
});

router.post('/deletePost',async function(req, res, next){
    console.log('두번째 미들웨어');
    let approve =false;

    try{
        await Post.destroy({where:{writer_id:res.id,createdAt:res.createdAt}});
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
        approve.approve = 'FALSE';
        return res.status(500).send(approve);
    }


    return res.status(200).send("OK");
});

module.exports = router;