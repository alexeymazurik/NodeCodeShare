var socketio = require('socket.io');
var mongoose = require('mongoose');
var db = require('./app/model/User');
var io;

exports.listen = function(server) {
    io = socketio.listen(server);
    io.sockets.on('connection', function(socket){
        socket.on('new user', function(data){
            console.log(data);
        });
    });
};