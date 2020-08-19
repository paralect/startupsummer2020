let koa = require('koa');
let Router = require('koa-router');
let session = require('koa-generic-session');
const serve = require('koa-static');
const send  = require('koa-send');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt');
const signup = require('./signup');
const signin = require('./signin');
const getArticle = require('./getArticle');
const addArticle = require('./addArticle');

let app = new koa();
let router = new Router();

app.use(bodyParser());
app.keys = ['keys', 'keykeys'];
app.use(session());

const root = require('path').join(__dirname, 'client');
app.use(serve(root));

router
  .get('/', async (ctx, next) => {
    await send(ctx, '/home.html', { root });
    next();
  })
  .get('/public/signup', async (ctx, next) => {
    await send(ctx, '/signup.html', { root });
    next();
  })
  .get('/public/signin', async (ctx, next) => {
    await send(ctx, '/signin.html', { root });
    next();
  })
  .post('/public/signup', async (ctx, next) => {
    const formData = ctx.request.body;
    const signNewUser = signup(formData);
    ctx.body = signNewUser.message;
    next();
  })
  .post('/public/signin', async (ctx, next) => {
    const signed = signin(ctx, jwt);
    const session = ctx.session;
    if (signed.ok) session.state = { name: signed.name }
    next();
  })
  .get('/posts', async (ctx, next) => {
    const session = ctx.session;
    console.log('hehheh');
    const posts = await getArticle('Hello people', 'We are aliens');
    ctx.body = posts;
  })
  .post('/posts', async (ctx, next) => {
    const session = ctx.session;
    const allPosts = addArticle(session.state, posts.data);
    ctx.body = allPosts;
  });
 

app
  .use(koajwt({
    secret: 'shared-secret',
    passthrough: false,
    getToken: (ctx) => ctx.session.token,
  }).unless({
    path: [/^\/public/, "/"]
  }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);