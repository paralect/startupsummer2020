const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
let session = require('koa-generic-session');

const app = new Koa();
const router = new Router();
app.keys = ['some-secret-key-one', 'some-secret-key-two'];

const get = (context) => {
  session = context.session;
  session.count = session.count || 0;
  session.count += 1;
  context.body = session.count;
};

const remove = (context) => {
  context.session = null;
  context.body = 0;
};

const regenerate = async (context) => {
  get(context);
  await context.regenerateSession();
  get(context);
};

app
  .use(session())
  .use(async (context, next) => {
    switch (context.path) {
      case '/get':
        get(context);
        break;
      case '/remove':
        remove(context);
        break;
      case '/regenerate':
        await regenerate(context);
        break;
      default:
        await serve(`${__dirname}/static`)(context, next);
    }
    await next();
  })
  .use(router.get('/data', (context) => {
    console.log(context.request);
  }));

app.listen(3000);
