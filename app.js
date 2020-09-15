const app = require('./conn_android.js');
const http = require('http').Server(app);
const sequelize = require('./models').sequelize;
const io = require('socket.io').listen(http);
sequelize.sync();

http.listen(3000,function(){
});

io.sockets.on('connection', function(socket){
    console.log("socket 22222222222222222222");
    socket.on('client msg', function(data){
        console.log("0000000000000000000000000000");
        io.emit('server msg:', "aaaa");
        socket.send("hi");
    });
});