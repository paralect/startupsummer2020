const io = require('socket.io');
const color = require('../app.constants');

const server = io.listen(3031);

server.on('connection', (socket) => {
  console.log(`${color.FgBlue}New connection!\n${color.FgGreen}Client connected id = ${socket.id.slice(0, 3)}`);

  socket.on('send-message', (message) => {
    console.log(`${color.FgYellow}Client (id = ${socket.id.slice(0, 3)}) send some message${color.FgWhite}: ${message.message}`);
    socket.broadcast.emit('get-message', message);
  });
  socket.on('typing-message', (username) => {
    console.log(`${color.FgMagenta}${username} is typing a message...`);
    socket.broadcast.emit('get-typing-username', username);
  });

  socket.on('disconnect', () => {
    console.log(`${color.FgRed}Client gone id = ${socket.id.slice(0, 3)}${color.FgWhite}`);
  });
});
