const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const options = { parseMessageDeflate: false };
const io = require('socket.io')(server, options);


const users = new Map();

const DEFAULT_ROOM = 'general';

io.on('connection', (socket) => {
  console.log(`New connection from: ${socket.id}`);

  users.set(socket.id, { id: socket.id, username: 'anon', typing: false });
  socket.join(DEFAULT_ROOM);
  socket.currentRoom = DEFAULT_ROOM;

  socket.on('message', (data) => {
    io.to(socket.currentRoom).emit('message', { user: users.get(socket.id), message: data.payload });
  });

  socket.on('set_username', (data) => {
    users.set(socket.id, { ...users.get(socket.id), username: data.payload });
    console.log(`${socket.id} - new user name: ${data.payload}`);
  });

  socket.on('typing', () => {
    socket.to(socket.currentRoom).broadcast.emit('typing', users.get(socket.id));
  });

  socket.on('set_room', (data) => {
    socket.leave(socket.currentRoom);
    socket.join(data.room);
    socket.currentRoom = data.room;
  });

  socket.on('disconnect', (reason) => {
    console.log(`Disconnected reason: ${reason}`);
  });
})


server.listen(2003);
