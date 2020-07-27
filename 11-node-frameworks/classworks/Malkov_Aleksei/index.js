const Koa = require('koa');
const Joi = require('@hapi/joi');
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
let session = require('koa-generic-session');

const app = new Koa();
const router = new Router();
app.use(bodyParser());

app.keys = ['keys', 'keykeys'];
app.use(session());

app.use(serve('.'));
app.use(serve('./client/home.html'));
app.use(serve('./client/spentForm.html'));

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  description: Joi.string().required(),
  rank: Joi.number().required(),
});

router
  .post('/spent', async (ctx, next) => {
    let bodyData = ctx.request.body;
    try {
      bodyData = await schema.validateAsync(bodyData);
      console.log(bodyData);
      let session = ctx.session;
      session.state = session.state ? [...session.state, bodyData] : [bodyData];
    }
    catch (err) {
      console.log(err);
    }
    await next();
  })
  .get('/spent', (ctx, next) => {
    let session = ctx.session;
    ctx.body = session.state;
  });

app.use(router.routes());


app.listen(3000);