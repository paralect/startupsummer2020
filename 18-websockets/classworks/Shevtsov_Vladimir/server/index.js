const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const options = { parseMessageDeflate: false };
const io = require('socket.io')(server, options);


const users = new Map();

io.on('connection', (socket) => {
  console.log(`New connection from: ${socket.id}`);

  users.set(socket.id, 'anon');

  socket.on('message', (data) => {
    console.log(`Rcvd: message ${JSON.stringify(data)}`);
    switch (data.type) {
      case 'message':
        io.emit('message', { type: 'message', username: users.get(socket.id), message: data.payload });
        break;
      case 'set_username':
        users.set(socket.id, data.payload);
        console.log(`${socket.id} - new user name: ${data.payload}`);
        break;
      case 'typing':
        socket.broadcast.emit('message', { type: 'typing', username: users.get(socket.id) });
        break;
      default:
        break;
    }
  });


  socket.on('disconnect', (reason) => {
    console.log(`Disconnected reason: ${reason}`);
  });
})


server.listen(3002);
