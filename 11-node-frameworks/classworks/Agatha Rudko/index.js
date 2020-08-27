const serve = require('koa-static');
const Koa = require('koa');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const joi = require('joi');
const router = new Router();

const app = new Koa();


const schem = joi.object({
  name: joi.string().required(),
  surname: joi.string().min(3),
});

function get(ctx) {
  const session = { count: ctx.session.count };
  ctx.body = session.count;
}

function remove(ctx) {
  session.count = 0;
  ctx.body = session.count;
}
const increment = (ctx, next) => {
  ctx.session.count = ctx.session.count || 0;
  ctx.session.count++;
  next();
};

app.use(bodyParser());
app.use(session());
app.use(increment);
app.use(async (ctx) => {
  switch (ctx.url) {
    case '/get':
      await get(ctx);
      break;
    case '/remove':
      await remove(ctx);
      break;
  }
});

router.post('/form', async (ctx, next) => {
  if (schema.validate(ctx.request.body).error) {
    ctx.body = 'Something is wrong...';
    ctx.status = 400;
  } else {
  ctx.body = ctx.request.body;
  this.session.input = schem.validate(ctx.request.body);
  }
  await next();
});

app.use(serve(__dirname + '/images/'));
app.use(() => console.log(__dirname));

app.listen(8888);

console.log('listening on port 8888');
