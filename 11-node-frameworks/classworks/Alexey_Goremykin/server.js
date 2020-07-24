const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const Joi = require('joi')

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

let db = {};

app.keys = ['keys', 'keykeys'];


app.use(serve('static'));
app.use(session());
app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  next();
});

app.use((ctx, next) => {
  ctx.body = 'My function'
  next();
});


app.use(async (ctx, next) => {
  if (ctx.path === '/get'){
    get(ctx);
  } else if (ctx.path === '/regenerate') {
    regenerate(ctx);
  }
  next()
});

const get = (ctx) => {
  let session = ctx.session;
  session.count = session.count || 0;
  session.count++;
  ctx.body = session.count;
}

const regenerate = async (ctx) => {
  get(ctx);
  await ctx.regenerateSession();
  get(ctx);
}

router.post('/form.html', async (ctx, next) => {

  let schema = Joi.object({
    fullname: Joi.string()
      .min(3)
      .required(),
    summerHistory: Joi.string()
      .min(3)
      .required(),
    mark: Joi.number()
  })

  let { value, err } = schema.validate(ctx.request.body);

  if(!err) {
    db.user = ctx.request.body;
    fs.writeFileSync('db.json', JSON.stringify(ctx.request.body));
  }
  console.log(db);
})

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000);