const Koa = require('koa');
const Router = require('koa-router');
const Joi = require('@hapi/joi');
const serve = require('koa-static');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');


const app = new Koa();
const router = new Router();
let db = [];
app.keys = ['Shh, its a secret!'];

const schema = Joi.object({
  firstName: Joi.string()
      .min(3)
      .max(30)
      .required(),
  
  lastName: Joi.string()
      .min(3)
      .max(30)
      .required(),

  description: Joi.string()
      .min(3)
      .required(),
  
  mark: Joi.string()
      .required()
});

router.post('/quiz', async (ctx, next) => {
  try {
    const answer = await schema.validateAsync(ctx.request.body);
    db.push(answer);
    ctx.response.body = JSON.stringify({answer: 'Thanks for your answer!'});
  }
  catch (err) { 
    ctx.response.body = JSON.stringify({error: err});
    console.log(err);
  }
});

router.get('/counter', async (ctx, next) => {
  ctx.response.body = `Counter = ${ctx.session.views}`;
});

router.get('/answers', async ctx => {
  ctx.response.body = JSON.stringify({user: db});
});

app.use(session(app));
app.use(bodyParser());
app.use(json());


app.use(serve('index'));
app.use((ctx, next) => {
  let count = ctx.session.views || 0;
  ctx.session.views = ++count;
  next();
} )

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);