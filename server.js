var http = require('http');
var express = require('express');
var authServer = require('./app/authServer');


var app = express();

app.use(app.router);
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/css', express.static(__dirname + '/css'));

var server = http.createServer(app).listen('3000','127.0.0.1');
//authServer.listen(server);

app.get('/', function(req,res){
    res.sendfile(__dirname + '/index.html');
});


//app.get('/#login', function(req,res){
//    res.sendfile(__dirname + '/app/views/login.html');
//});

console.log('Server is listening at 3000...');