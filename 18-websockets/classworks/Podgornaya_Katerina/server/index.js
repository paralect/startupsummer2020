const io = require('socket.io');

const server = io.listen(3031);

const FgBlack = '\x1b[30m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';
const FgBlue = '\x1b[34m';
const FgMagenta = '\x1b[35m';
const FgCyan = '\x1b[36m';
const FgWhite = '\x1b[37m';

server.on('connection', (socket) => {
  console.log(`${FgBlue}New connection!\n${FgGreen}Client connected id = ${socket.id.slice(0, 3)}`);

  socket.on('set-username', (username) => {
    console.log(`${FgGreen}Client (id = ${socket.id.slice(0, 3)}) set username '${username}'`);
  });
  socket.on('send-message', (message) => {
    console.log(`${FgYellow}Client (id = ${socket.id.slice(0, 3)}) send some message${FgWhite}: ${message.message}`);
    socket.broadcast.emit('get-message', message);
  });

  socket.on('disconnect', () => {
    console.log(`${FgRed}Client gone id = ${socket.id.slice(0, 3)}${FgWhite}`);
  });
});
