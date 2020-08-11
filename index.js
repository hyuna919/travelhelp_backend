const db = require('./conn_db.js');
const app = require('./conn_android.js');
var http = require('http');

var getUserList = function(){
    db.then(function(res){
        console.log("----",res);
    })
}

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});

    getUserList();

    res.end();
});

server.listen(3000,function(){
    console.log("server is runnig");
});
