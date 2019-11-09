// npm install uNetworking/uWebSockets.js#v16.2.0
const uWS = require('uWebSockets.js');

// an "app" is much like Express.js apps with URL routes,
// here we handle WebSocket traffic on the wildcard "/*" route
const app = uWS.App().ws('/*', {  // handle messages from client

  open: (socket, req) => {
    /* For now we only have one canvas */
    socket.subscribe("drawing/canvas1");
  },
  message: (socket, message, isBinary) => {
    /* In this simplified example we only have drawing commands */
    app.publish("drawing/canvas1", message, true);
  }
});

// finally listen using the app on port 9001
app.listen(9001, (listenSocket) => {
  if (listenSocket) {
    console.log('Listening to port 9001');
  }
});
