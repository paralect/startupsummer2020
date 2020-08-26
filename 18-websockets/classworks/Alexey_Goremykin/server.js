const http = require('http');
const server = http.createServer();
const io = require('socket.io').listen(server);

io.on('connection', socket => {
  socket.userName = 'Anonimus';

  socket.on('send-message', message => {
    io.sockets.emit('send-message', { userName: socket.userName, message: message });
  });
  socket.on('change-userName', userName => socket.userName = userName);
  socket.on('typing-message', () => socket.broadcast.emit('typing-message', socket.userName));
});

server.listen(3001);
