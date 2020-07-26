const Koa = require('koa');
const Joi = require('joi')
const fs = require('fs');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const session = require('koa-generic-session');
const Router = require('koa-router');

const counter = require('./middlewares/counter')

const router = new Router();

const app = new Koa();

const schema = Joi.object({
  name: Joi.string(),
  surname: Joi.string().required(),
  description: Joi.string().min(3),
  mark: Joi.number(),
});

app.keys = ['keys', 'keykeys'];
app.use(session());

app.use(serve('./static/text'));
app.use(serve('./static/images'));
app.use(serve('./static/pages'));

app.use(bodyParser());

app.use(counter);

router
  .post('/', async (ctx) => {
    console.log('entered')
    const { error, value } = schema.validate(ctx.request.body);
    if (error) {
      ctx.body = JSON.stringify(error);
    } else {
      ctx.body = JSON.stringify(value);
    }
  });

router
  .get('/', async (ctx) => {
    const { session } = ctx;
    ctx.body = JSON.stringify({ count: session.count });
  });

app.use(router.routes());

app.listen(3000, () => {
  console.log('Server was started');
});
