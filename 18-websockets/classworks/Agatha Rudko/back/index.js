const Koa = require('koa');
const socketio = require('socket.io');
const app = new Koa();
const server = require('http').createServer(app.callback())
const io = socketio(server);

const messages = [];

io.on("connection", (socket) => {
  console.log("New client connected");
});

io.on("send_message",(socket) => {
  messages.push({name: 'lol', value: socket.value});
  socket.broadcast.emit("render_message",
    messages)
})

io.on("disconnect", () => {
  console.log("Client disconnected");
});
server.listen(3003, () => {
  console.log('listening on: 3003');
});
