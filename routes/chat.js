const express = require('express');
const Message = require('../models').Message; 

var socketio = function(server){
    var io = require('socket.io')(server);

    io.on('connection', function(socket){
 
        //채팅룸 접속
        console.log('User Conncetion~~~~~~~~~');
       
        socket.on('connect user', function(user){
            console.log("Connected user ");
            socket.join(user['roomName']);
            console.log("roomName : ",user['roomName']);
            console.log("state : ",socket.adapter.rooms);
            io.emit('connect user', user);
        });
       
       
        //메세지 추가
        socket.on('chat message', async function(msg){
            //db저장
            await Message.create({
                sender: msg['sender'],
                receiver: msg['receiver'],
                date: msg['date'],
                time: msg['time'],
                message: msg['message']
           });
            
            //응답
            io.to(msg['receiver']).emit('chat message', msg);

            
        });
      });

    return io;
}

module.exports = socketio;