const db = require('./conn_db.js');
const app = require('./conn_android.js');
var http = require('http');

var getUserList = function(){
    db.then(function(res){
        console.log("----",res[0].id);
    })
}


var server = http.createServer(app, function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
});

server.listen(3000,function(){
    getUserList();
});
