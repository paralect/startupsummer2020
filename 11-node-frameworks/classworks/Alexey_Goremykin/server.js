const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');

const Koa = require('koa');
const Router = require('koa-router');

const { schema } = require('./schema');

const app = new Koa();
const router = new Router();

app.keys = ['keys', 'keykeys'];

app.use(serve('static'));
app.use(session());
app.use(bodyParser());

app.use((ctx, next) => {
  ctx.session.lastVisit = ctx.session.currentVisit;
  ctx.session.currentVisit = { url: ctx.url, date: new Date() };

  ctx.session.count = ctx.session.count || 0;
  ctx.session.count++;

  next();
});

router.get('/', async (ctx, next) => {
  ctx.redirect('/index.html');
  next();
});

router.get('/last-visit', async (ctx, next) => {
  const { session } = ctx;
  ctx.body = session.lastVisit || session.currentVisit;

  next();
});

router.get('/number-of-visits', async (ctx, next) => {
  const { session } = ctx;
  ctx.body = session.count;

  next();
});

router.get('/reset', async (ctx, next) => {
  await ctx.regenerateSession();
  ctx.body = session.count;

  next();
});

router.get('/marks', async (ctx, next) => {
  ctx.body = ctx.session.marks || [];
  next();
});

router.post('/marks', async (ctx, next) => {
  const mark = ctx.request.body;
  let { error } = schema.validate(mark);

  if (!error) {
    ctx.session.marks = (ctx.session.marks || []);
    ctx.session.marks.push(mark);
    ctx.body = mark;
    console.log(ctx.session.marks);
  } else {
    ctx.body = { errors: error };
  }

  next();
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
