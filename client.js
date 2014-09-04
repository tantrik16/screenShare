var socket = require('socket.io-client')('http://localhost:5001');
var my_credentials = []
socket.on('command', function (data){	
	console.log(data);
});
socket.on('user', function (data){
	if(data == 'No user'){
		console.log("No such user Found :( !");
		process.exit(0);
	}
	console.log(data);
});
if(!process.argv[2] || !process.argv[3]){
	console.log('Enter Username & Password!');
	process.exit(0);
}
my_credentials = my_credentials.concat(process.argv[2]);
my_credentials = my_credentials.concat(process.argv[3]);
console.log(my_credentials);
socket.emit('credentials', my_credentials);