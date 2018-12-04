var express = require('express');

var app = express();
var server = app.listen(3000);                     //Running local server at localhost:3000

app.use(express.static('public'));                 //Everything present in public folder will be public and display on webpage 

console.log('Server is running');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection',newConnection);

function newConnection(socket){
    console.log('newConnection:' + socket.id);
    
    socket.on('mouse',mouseMsg);
    
    function mouseMsg(data){
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }
}