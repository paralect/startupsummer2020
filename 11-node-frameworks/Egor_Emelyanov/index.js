const Koa = require('koa');
const router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const joi = require('joi');

const app = new Koa();
const _ = router();
app.keys = ['kek', 'lol'];

let dataBase = [];

const schema = joi.object({
  id: joi.number().required(),
  name: joi.string().required(),
  description: joi.string().min(3),
});

app.use(serve('assets/text'));
app.use(serve('assets/alohadance'));
app.use(session());
app.use(bodyParser());

function increaseCounter() {
  const { session } = this;
  session.count = session.count || 0;
  session.count += 1;
}

function getCounter() {
  this.body = this.session.count;
}

app.use(async (ctx, next) => {
  ctx.body = 'Hello world!';
  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/favicon.ico' && ctx.method !== 'POST') {
    increaseCounter.call(ctx);
  }
  await next();
});

_.get('/counter', async (ctx, next) => {
  getCounter.call(ctx);
  await next();
});

_.post('/set_form_data', async (ctx, next) => {
  if (schema.validate(ctx.request.body).error || dataBase.some((userInfo) => userInfo.value.id === ctx.request.body.id)) {
    ctx.body = 'Incorrect form data';
    ctx.status = 400;
  } else {
    dataBase.push(schema.validate(ctx.request.body));
    ctx.body = 'Add form data in DB!';
  }
  await next();
});

_.get('/get_form_data', async (ctx, next) => {
  ctx.body = dataBase;
  await next();
});

app.use(_.routes());

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
