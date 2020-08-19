const incCounter = require('./inc-counter.middleware') ;
const reviewSchema = require('./reviewSchema');

const Router = require('koa-router');
const koa = require('koa');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');

const app = new koa();
app.keys = ['ahahaha'];

app.use(bodyParser());

app.use(serve(`public`));

app.use(session());

app.use(incCounter);

const router = new Router();

router.post('/summer', (ctx) => {
  const {error, value} = reviewSchema.validate(ctx.request.body);
  if (!error) {
    ctx.body = JSON.stringify(value);
  } else {
    ctx.body = JSON.stringify(error);
  }
})

router.get('/sessionCount', (ctx) => {
    const sessionsCount = {
      sessionNumber : ctx.session.count,
    }
    ctx.body = JSON.stringify(sessionsCount);
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
