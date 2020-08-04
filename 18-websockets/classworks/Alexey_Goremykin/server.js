const http = require('http');
const server = http.createServer();
const io = require('socket.io').listen(server);

let messages =[];

io.on('connection', socket => {
  socket.on('send-message', (message) => {
    messages.push(message)
    io.sockets.emit('new-message', [...messages]);
  });
  socket.on('typing-message', (userName) => {
    io.sockets.emit('typing-messasge-name', `Пользователь ${userName || 'Anonimus'} пишет сообщение`)
  })
});

server.listen(3001);