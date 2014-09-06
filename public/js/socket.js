(function (){
	var socket = io.connect();
	socket.on('imageFromPc', function (data){
		document.getElementById('image').setAttribute( 'src', 'data:image/png;base64,' + data );

		//document.getElementById('image').src = url(data);
	});
})()