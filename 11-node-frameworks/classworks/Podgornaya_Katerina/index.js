const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const joi = require('joi');
let session = require('koa-generic-session');

const app = new Koa();
const router = new Router();
app.keys = ['some-secret-key-one', 'some-secret-key-two'];

const schema = joi.object({
  lastname: joi.string().required(),
  description: joi.string().min(3).required(),
});

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

const setCounter = (context) => {
  get(context);
};

router
  .get('/get', (context, next) => {
    if (!session.state) session.state = [];
    // get last received data
    context.body = `${JSON.stringify(session.count)}\n${JSON.stringify(session.state[session.state.length - 1])}`;
  })
  .get('/remove', (context, next) => {
    remove(context);
  })
  .get('/regenerate', async (context, next) => {
    await regenerate(context);
  })
  .post('/data', async (context, next) => {
    const { value, error } = schema.validate(context.request.body, {
      allowUnknown: true, abortEarly: false,
    });
    if (error) {
      context.body += `\nError happend: ${JSON.stringify(error.message)}.`;
    } else {
      if (!session.state) session.state = [];
      session.state.push(context.request.body);
      context.body = JSON.stringify(session.state);
      context.body += JSON.stringify('Your data were got!');
    }
  });

app
  .use(session())
  .use(bodyParser())
  .use(serve((`${__dirname}/static`)))
  .use(async (context, next) => {
    setCounter(context);
    await next();
  })
  .use(router.routes());

app.listen(3030);
