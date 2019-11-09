const server_io = require('socket.io')(3000);


/* Define the server */
server_io.on('connection', function(socket) {

	socket.join('broadcast');

	socket.on('message', (message) => {

		server_io.in('broadcast').send(message);

	});
});
