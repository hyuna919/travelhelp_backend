const express = require('express');
const router = express.Router();
const Post = require('../models').Post;


router.post('/writePost',async function(req, res, next){
    console.log('두번째 미들웨어');
    let approve =false;

    try{
        await Post.create({
            post_id:req.body.id,
            title:req.body.title,
            date:req.body.date,
            airport:req.body.airport,
            content:req.body.content,
            country:"Germany"
       });
    }catch(err){
        console.log("에러"+err.name+", "+err.message);
        approve.approve = 'FALSE';
        return res.status(500).send(approve);
    }

    await insertPost(paramId, paramTitle, paramDate, paramAirport, paramContent);

    return res.status(200).send("확인");
});

module.exports = router;