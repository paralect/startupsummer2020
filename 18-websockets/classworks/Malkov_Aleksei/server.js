const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
app.use(cors());
const server = require('http').createServer(app);
const Router = require('koa-router');
const router = new Router();
const options = {origins:'*:*'};
const io = require('socket.io')(server, {options});

app.use(async (ctx, next) => {
  await next();
});
let numUsers = 0;
const users = new Map();

io.on('connection', (socket) => {
  let addedUser = false;
  let name = '';

  console.log("Connected!");
  console.log(users);
  socket.on('add user', (username) => {
    if (addedUser) return;
    if (users.has(username)) {
      const newName = `${username}${numUsers}`;
      users.set(newName, newName);
      name = newName;
      socket.emit('reg as user', newName);
    } else {
      name = username;
      users.set(username, username);
      socket.emit('reg as user', username);
    }

    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: users.get(username),
      numUsers: numUsers
    });
  });

  socket.on('change name', (username) => {
    const newName = `${username}${users.has(username) ? numUsers : ''}`;
    users.set(newName, newName);
    name = newName;
    socket.emit('reg as user', newName);
  });

  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: users.get(name),
      message: data
    });
  });

  socket.on('typing', (username) => {
    console.log(users);
    console.log(users.get(username));
    socket.broadcast.emit('typing', {
      username: users.get(username),
    });
  });

  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});

router
  .get('/', async (ctx, next) => {
    console.log('hihi');
  });
  

app.use(router.routes());
server.listen(3001);

