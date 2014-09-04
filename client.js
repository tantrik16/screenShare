var socket = require('socket.io-client')('http://localhost:5001');
socket.on('command', function (data){
	console.log(data);
});