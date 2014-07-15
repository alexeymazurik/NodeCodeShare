var http = require('http');
var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var socketListeners = require('./socketListeners');

mongoose.connect('mongodb://localhost/CodeShare');

var app = express();



app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/css', express.static(__dirname + '/css'));

var server = http.createServer(app).listen('3000','127.0.0.1');
socketListeners.listen(server);

app.get('/', function(req,res){
    res.sendfile(__dirname + '/index.html');
});


console.log('Server is listening at 3000...');