const koa = require('koa');
const router = require('koa-router');
const serve = require('koa-static');
const app = new koa();
const session = require('koa-generic-session');
const init = router();
// const KoaBody = require('koa-body');

// koaBody = convert(KoaBody());

// init.get('/get', getData);

// function getData(ctx, next) {
//   console.log('nfj');
//   ctx.body = 'get data';
//   next();
// }

// app.use(init.routes());


app.use(serve(__dirname + '/public'));

app.use(async(ctx, next) => {
  ctx.body = 'get data';
  await next();
});

app.use(async(ctx, next) => {
  ctx.body = 'change data';
  await next();
});

app.keys = ['Shh, its a secret!'];
app.use(session(app));
app.use(async(ctx, next) => {
  let count = ctx.session.views || 0;
  ctx.session.views = ++count;
  ctx.body = count + 'views';
  next();
});

// init.post('/', async (ctx, next) => {
//   console.log('lala');
// });

app.use(async(ctx) => {
 if(ctx.method === 'POST') {
   console.log(ctx.request.body); //bodyParser
 }
});

// app.use(serve(__dirname + '/public'));

app.listen(3000);