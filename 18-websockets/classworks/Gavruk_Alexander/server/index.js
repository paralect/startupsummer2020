const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.emit('username', { username: 'Anonymous' });

  socket.on('set_username', (username) => {
    socket.username = username;
    socket.emit('username', { username: socket.username });
  });

  socket.on('new_message', (msg) => {
    socket.lastMessage = msg;
    io.sockets.emit('messages', socket.lastMessage);
  })

  socket.on('set_typing', username => {
    socket.broadcast.emit('typing', username);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});
