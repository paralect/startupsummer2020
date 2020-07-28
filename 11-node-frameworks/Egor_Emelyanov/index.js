const Koa = require('koa');
const router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const joi = require('joi');

const app = new Koa();
const _ = router();
app.keys = ['kek', 'lol'];

const dataBase = [];

const schema = joi.object({
  id: joi.number().required(),
  name: joi.string().required(),
  description: joi.string().min(3),
});

app.use(serve('assets/text'));
app.use(serve('assets/alohadance'));
app.use(session());
app.use(bodyParser());

function increaseCounter(ctx, next) {
  ctx.session.count = ctx.session.count || 0;
  ctx.session.count += 1;
  next();
}

app.use((ctx, next) => {
  ctx.body = 'Hello world!';
  next();
});

app.use(increaseCounter);

_.get('/counter', (ctx) => {
  ctx.body = ctx.session.count;
});

_.post('/set_form_data', (ctx) => {
  if (schema.validate(ctx.request.body).error || dataBase.some((userInfo) => userInfo.value.id === ctx.request.body.id)) {
    ctx.body = 'Incorrect form data';
    ctx.status = 400;
  } else {
    dataBase.push(schema.validate(ctx.request.body));
    ctx.body = 'Add form data in DB!';
  }
});

_.get('/get_form_data', (ctx) => {
  ctx.body = dataBase;
});

app.use(_.routes());

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
