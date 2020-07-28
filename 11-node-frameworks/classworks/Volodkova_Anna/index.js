const {incCounter, schema} = require('./functions') ;
const Router = require('koa-router')
const koa = require('koa');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');

const app = new koa();

app.use(bodyParser());

app.use(serve(`public`));

app.use(session());
const inc = incCounter(session);

const router = new Router();

router.post('/summer', (ctx) => {
  inc();
  const {error, value} = schema.validate(ctx.request.body);
  if (!error) {
    ctx.body = JSON.stringify(value);
  } else {
    ctx.body = "Not valid name or mark";
  }
})

router.get('/sessionCount', (ctx) => {
  if (ctx.request.path !== '/favicon.ico')
  {
    const sessionsCount = {
      sessionNumber : inc()
    }
    ctx.body = JSON.stringify(sessionsCount);
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async (ctx, next) => {
  await next();
  if (ctx.request.path !== '/favicon.ico')
    console.log("koko");
});


app.listen(3000);
