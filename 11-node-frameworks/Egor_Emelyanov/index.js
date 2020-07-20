const Koa = require('koa');
const router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const joi = require('joi');

const app = new Koa();
const _ = router();
app.keys = ['kek', 'lol'];

let formData = {};

const schema = joi.object({
  name: joi.string().required(),
  description: joi.string().min(3),
});

app.use(serve('assets/text'));
app.use(serve('assets/alohadance'));
app.use(session());
app.use(bodyParser());

function get() {
  const { session } = this;
  session.count = session.count || 0;
  session.count += 1;
  this.body = session.count;
}

/* eslint-disable func-names */

app.use(async (ctx, next) => {
  ctx.body = 'Hello world!';
  await next();
});

app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    get.call(ctx);
  }
  await next();
});

_.post('/form', async (ctx, next) => {
  ctx.body = ctx.request.body;
  formData = schema.validate(ctx.request.body);
  console.log(formData);
  await next();
});

app.use(_.routes());

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
