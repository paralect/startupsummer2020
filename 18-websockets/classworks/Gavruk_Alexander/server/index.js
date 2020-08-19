const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.emit('username', { username: 'Anonymous' });

  socket.on('setUsername', (username) => { 
    socket.username = username;
  });

  socket.on('newMessage', (msg) => {
    socket.lastMessage = msg;
    io.sockets.emit('messages', socket.lastMessage);
  })

  socket.on('setTyping', username => {
    socket.broadcast.emit('typing', username);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});
