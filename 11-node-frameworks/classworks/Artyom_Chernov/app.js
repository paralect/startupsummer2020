const Koa = require('koa');
const app = new Koa();
const router = require('./routes');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const session = require('koa-generic-session');

app.keys = ['keys', 'keykeys'];

app.use(cors());
app.use(bodyParser());
app.use(session());
app.use(async (ctx, next) => {
  const session = ctx.session;
  session.date = new Date();
  session.count = session.count || 0;
  session.count ++;
  if(!Array.isArray(session.users)){
    session.users = []
  }
  await next()
})

app.use(router)
app.use(serve('.'));

app.listen(3000);