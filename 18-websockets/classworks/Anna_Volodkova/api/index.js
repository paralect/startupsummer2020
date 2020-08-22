const socketio = require('socket.io');
const koa = require('koa');

const app = new koa();
const server = require('http').createServer(app.callback())
const io = socketio(server);

function onNewWebsocketConnection(socket) {
  socket.on('send-message', (msg) => {
    io.sockets.emit('get-message', { username: (socket.username ? socket.username : 'Anonymous'), value: msg });
  });
  socket.on('send-name', (name) => {
    socket.username = name;
  });
  socket.on('typing', (name) => {
    socket.broadcast.emit('typing', name);
  });
}

io.on('connection', onNewWebsocketConnection);

server.listen(3002);
