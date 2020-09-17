const express = require('express');
const Message = require('../models').Message; 

var socketio = function(server){
    var io = require('socket.io')(server);

    io.on('connection', function(socket){
 
        //로그인하면 이거 밑에 두개뜸
        console.log('User Conncetion~~~~~~~~~');
       
        socket.on('connect user', function(user){
          console.log("Connected user ");
          socket.join(user['roomName']);
          console.log("roomName : ",user['roomName']);
          console.log("state : ",socket.adapter.rooms);
          io.emit('connect user', user);
        });
       
       
        //메세지 입력하면 서버 로그에 이거뜸
        socket.on('chat message', function(msg){
          // console.log("Message " + msg['message']);
          // console.log("송신자 : ",msg['sender']);
          // console.log("수신자 : ",msg['receiver']);
          // console.log("날짜 : ",msg['date']);
          // console.log("시간 : ",msg['time']);
          io.to(msg['receiver']).emit('chat message', msg);
        });
      });

    return io;
}

module.exports = socketio;