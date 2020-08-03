const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.username = 'Hacker';

  socket.on('message', (msg) => {
    io.emit('message', { username: socket.username, message: msg });
  });

  socket.on('change_username', (username) => {
    socket.username = username;
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', socket.username);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(3001, () => {
  console.log('listening on *:3001');
});
