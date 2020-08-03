const Koa = require('koa');
const socketio = require('socket.io');
const app = new Koa();
const server = require('http').createServer(app.callback())
const io = socketio(server);

app.keys =['lol']

const onConnect = (socket) =>{
  console.log("New client connected: "+socket.id);
  socket.on("send_message",(message) => {
    io.sockets.emit("render_message",
      { name:(socket.name ? socket.name : 'Anon'), message: message})
  });
  socket.on('send_name', name => {
    socket.name = name;
  });
  socket.on('typing', name => {
    socket.broadcast.emit('typing', name ? name : 'Anon');
  });
}

io.on('connection', onConnect);

server.listen(3003, () => {
  console.log('listening on: 3003');
});
