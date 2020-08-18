var express = require('express');
var router = express.Router();
const db = require('../conn_db.js');
const Post = require('../models').Post;


router.post('/writePost',async function(req, res, next){
    
    let approve ={'approve':'OK'};

    //실패해도 뭔가 return해줘야함
    tmp = await Post.create({
        post_id:req.body.id,
        title:req.body.title,
        date:req.body.date,
        airport:req.body.airport,
        content:req.body.content
   });

    return res.status(200).send(approve);
});

module.exports = router;