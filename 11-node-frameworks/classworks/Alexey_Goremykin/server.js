const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const Joi = require('joi')

const Koa = require('koa');
const Router = require('koa-router');
const { countReset } = require('console');
const app = new Koa();
const router = new Router();

let db = {};

app.keys = ['keys', 'keykeys'];


app.use(serve('static'));
app.use(session());
app.use(bodyParser());

app.use((ctx, next) => {
  ctx.session.count = ctx.session.count || 0;
  ctx.session.count++;
  next();
});

router.get ('/get', async (ctx, next) => {
  get(ctx);
  next();
});

router.get ('/regenerate', async (ctx, next) => {
  regenerate(ctx);
  next();
});

const get = (ctx) => {
  ctx.body = ctx.session.count;
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