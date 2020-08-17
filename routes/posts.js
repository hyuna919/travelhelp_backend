var express = require('express');
var router = express.Router();
const db = require('../conn_db.js');
const insertPost = db.insertPost;


router.post('/writePost',async function(req, res, next){
    console.log('두번째 미들웨어');
    let approve =false;

    let paramId = req.body.id;
    let paramTitle = req.body.title;
    let paramDate = req.body.date;
    let paramAirport = req.body.airport;
    let paramContent = req.body.content;

    await insertPost(paramId, paramTitle, paramDate, paramAirport, paramContent);

    return res.status(200).send("확인");
});

module.exports = router;