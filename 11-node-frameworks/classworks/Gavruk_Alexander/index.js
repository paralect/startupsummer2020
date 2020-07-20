const Koa = require('koa');
const Joi = require('joi')
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const session = require('koa-generic-session');
const Router = require('koa-router');

const router = new Router();

const app = new Koa();

const schema = Joi.object({
  surname: Joi.string().required(),
  description: Joi.string().min(3),
});

app.keys = ['keys', 'keykeys'];
app.use(session());

app.use(serve('./static/text'));
app.use(serve('./static/images'));

app.use(bodyParser());

router
  .post('/summer', async (ctx) => {
    const { error, value } = schema.validate(ctx.request.body);
    ctx.body = value;
    console.log(error);
    console.log(ctx.request.body);
  })

app.use(async (ctx, next) => {
  await next();
  console.log(`${ctx.method} ${ctx.url}`);
});

router
  .get('/', async (ctx) => {
    updateCount.call(ctx);
  })

function updateCount() {
  const { session } = this;
  session.count = session.count || 0;
  session.count += 1;
  this.body += '\n' + session.count.toString();
}

app
  .use(router.routes());

app.listen(3000, () => {
  console.log('Server was started');
});
