const io = require("socket.io");

const server = io.listen(3030);

server.on('connection', (socket) => {
  console.log(`Client connected id = ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Client gone id = ${socket.id}`);
  });
  socket.on('send-message', () => {
    console.log('client send some message');
  });
});
