var socket = require('socket.io-client')('http://mobile-cmd.herokuapp.com');
socket.on('command', function (data){
	console.log(data);
});