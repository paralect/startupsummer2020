const Koa = require('koa');
const app = new Koa();
const socketIo = require("socket.io");
const server = require('http').createServer(app.callback())
const io = socketIo(server);


io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("SendMes")
});


server.listen(3001);
