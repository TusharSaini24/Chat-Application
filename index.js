const express = require('express');

const socket = require('socket.io');

const app = express();


app.use(express.static('public'));

const server = app.listen(8000,()=>{
    console.log("The server is listening on the port 8000");
})

const io = socket(server);
io.on('connection',function(socket){
    console.log(socket.id);
    socket.on('chat' , function(data){
        io.sockets.emit('chat' , data);
    });

    socket.on('typing' , function(data){
        socket.broadcast.emit('typing',data);
    })
});