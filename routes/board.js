const express = require('express');
const router = express.Router();
const Post = require('../models').Post;


//국가별 주소로
router.get('/:key/:limit', async function(req, res, next){
    let approve;
    let key = Number(req.params.key);
    let limit = Number(req.params.limit);
    try{
        await Post.count().then(result=>{})

        await Post.findAll({where:{country:'Germany'}, raw:true, offset:key+1,limit:limit}).then(posts=>{
            console.log(key);
            approve = posts;
        })
    }catch(err){
        console.log('에러'+err.name);
        approve = false;
        return res.status(500).send(approve);
    }
    return res.status(200).send(approve);
})

module.exports = router;