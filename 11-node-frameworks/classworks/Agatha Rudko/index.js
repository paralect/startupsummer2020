const serve = require('koa-static');
const Koa = require('koa');
const sessionss = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const joi = require('joi');
const router = new Router();

const app = new Koa();
let session = sessionss;
let formInputs = {};
const schem = joi.object({
  name: joi.string().required(),
  surname: joi.string().min(3),
});

function get(ctx) {
  session.count = session.count || 0;
  session.count++;
  ctx.body = session.count;
}

function remove(ctx) {
  session.count = 0;
  ctx.body = session.count;
}

function form(ctx) {
  ctx.body = ctx.request.body;
  formInputs.push(ctx.body);
}

app.use(bodyParser());
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
  ctx.body = ctx.request.body;
  formInputs = schem.validate(ctx.request.body);
  await next();
});

app.use(serve(__dirname + '/images/'));
app.use(() => console.log(__dirname));

app.listen(8888);

console.log('listening on port 8888');
