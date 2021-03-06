const Koa = require('koa');
const app = new Koa();
const socket = require('socket.io');
const http = require('http');
const server = http.createServer(app.callback())
const io = socket(server)

app.use(async ctx => {
  ctx.body = 'Hello World1'
})

io.on('connection', (socket) => {
  console.log(`client ${socket.id} connected`);

  socket.on('new-message', (data) => {
    socket.broadcast.emit('new-message-received', data)
  });

  socket.on('new-message-typing', (data) => {
    socket.broadcast.emit('new-message-typing-stop', data)
  });

});

server.listen(3001);