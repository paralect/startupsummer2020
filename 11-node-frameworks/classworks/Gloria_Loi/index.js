const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const Joi = require('@hapi/joi');

const router = Router();

const schema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  text: Joi.string().min(3).required(),
  mark: Joi.number(),
});

router.get('/counter', (ctx) => {
  ctx.response.body = `Counter: ${ctx.session.counter}`;
});

router.get('/data', (ctx) => {
  ctx.response.body = ctx.session.data;
});

router.post('/form', async (ctx) => {
  const { error, value } = schema.validate(ctx.request.body);
  if (!error) {
    ctx.session.data = ctx.session.data || [];
    ctx.session.data.push(value);
    ctx.response.body = JSON.stringify({ message: 'completed' });
  } else {
    ctx.response.body = JSON.stringify({ error });
  }
});

const app = new Koa();

app.keys = ['newest secret key', 'older secret key'];

app.use(session());
app.use(bodyParser());
app.use((ctx, next) => {
  ctx.session.counter = ctx.session.counter || 0;
  ctx.session.counter += 1;
  return next();
});
app.use(serve('static'));
app.use(router.routes());

app.listen(3000, console.log('server started http://localhost:3000/'));
