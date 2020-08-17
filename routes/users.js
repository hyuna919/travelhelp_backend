var express = require('express');
var router = express.Router();
const db = require('../conn_db.js');
const userList = db.getUserList;


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


router.post('/mine', async function(req, res, next){
    console.log("유저");
    let approve ={'approve_id':'NO','approve_pw':'NO'};


    let paramId = req.body.id;
    let paramPassword = req.body.password;
    console.log(paramId);
    approve = await login(paramId, paramPassword);

    return res.status(200).send(approve);
});


module.exports = router;