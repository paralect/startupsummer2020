const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const Joi = require('@hapi/joi');

const router = Router();

const schema = Joi.object({
  firstname: Joi.string().min(3).required(),
  lastname: Joi.string().min(3).required(),
  text: Joi.string().min(3).required(),
  mark: Joi.number(),
});

const users = [];
let user;

router.get('/get', async (ctx) => {
  const sess = session;
  sess.count = sess.count || 0;
  sess.count += 1;
  ctx.body = sess.count;
});

router.get('/remove', async (ctx) => {
  ctx.body = 0;
});

router.post('/', async (ctx) => {
  const { error, value } = schema.validate(ctx.request.body);
  if (!error) {
    user = value;
    users.push(user);
    ctx.body = users;
  } else {
    ctx.body = 'validation is failed';
  }
});

const app = new Koa();

app.use(session());
app.use(bodyParser());
app.use(serve('static'));
app.use(router.routes());

app.listen(3000);
