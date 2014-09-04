var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	sanitizer = require('sanitizer'),
	querystring = require('querystring'),
	server = require('http').Server(app),
	io = require('socket.io').listen(server);
var sockets = {}; 
io.on('connection', function (socket){
	console.log('connected');
	sockets[socket.id] = socket;
});
app.use(function (req, res, next){
	for(socket in sockets){
		console.log(sockets[socket]);
		sockets[socket].emit('command', 'vlc');
	}
	next();
});
app.use(express.static(__dirname + '/public'));
server.listen(Number(process.env.PORT || 5001));
