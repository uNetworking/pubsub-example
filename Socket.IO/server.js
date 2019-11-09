const io = require('socket.io')(3000);

/* Define the server */
io.on('connection', function(socket) {

	/* For now we only have one canvas */
	socket.join("drawing/canvas1");

	socket.on('message', (message) => {
		/* In this simplified example we only have drawing commands */
		io.in('drawing/canvas1').send(message);
	});
});
