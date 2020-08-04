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

const get = (ctx) => {
  session = ctx.session;
  session.count = session.count || 0;
  session.count += 1;
};

const remove = (ctx) => {
  ctx.session = null;
};

const regenerate = async (ctx) => {
  get(ctx);
  await ctx.regenerateSession();
  get(ctx);
};

const setCounter = (ctx) => {
  get(ctx);
};

router
  .get('/get', (ctx) => {
    if (!session.state) session.state = [];
    ctx.body = {
      success: true,
      counter: session.count,
      data: session.state[session.state.length - 1],
    };
  })
  .get('/remove', (ctx) => {
    remove(ctx);
    ctx.body = {
      success: true,
      counter: session.count,
    };
  })
  .get('/regenerate', async (ctx) => {
    await regenerate(ctx);
    ctx.body = {
      success: true,
      counter: session.count,
    };
  })
  .post('/data', async (ctx) => {
    const { error } = schema.validate(ctx.request.body, {
      allowUnknown: true, abortEarly: false,
    });
    if (error) {
      ctx.body = {
        success: false,
        error: error.message,
      };
    } else {
      if (!session.state) session.state = [];
      session.state.push(ctx.request.body);
      ctx.body = {
        success: true,
        counter: session.count,
        data: session.state,
      };
    }
  });

app
  .use(session())
  .use(bodyParser())
  .use(serve((`${__dirname}/static`)))
  .use(async (ctx, next) => {
    setCounter(ctx);
    await next();
  })
  .use(router.routes());

app.listen(3030);
