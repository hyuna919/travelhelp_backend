const express = require('express');
const router = express.Router();
const Message = require('../models').Message;

router.get('/',async function(req, res, next){
    try{
        console.log('chatting');
    }catch(err){

    }
    return 1;
})

module.exports = router;