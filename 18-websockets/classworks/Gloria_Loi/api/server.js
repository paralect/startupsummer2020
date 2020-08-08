const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = 8000;

const app = express();

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('new_message', (value) => {
    io.sockets.emit('message', value);
  });

  socket.on('typing', (user) => {
    socket.broadcast.emit('typing', user);
  });
});

io.listen(port, () => console.log(`Listening on port ${port}`));
