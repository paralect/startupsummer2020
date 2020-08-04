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
  .get('/signup', async (ctx, next) => {
    await send(ctx, '/signup.html', { root });
    next();
  })
  .get('/signin', async (ctx, next) => {
    await send(ctx, '/signin.html', { root });
    next();
  })
  .post('/signup', async (ctx, next) => {
    const formData = ctx.request.body;
    const signNewUser = signup(formData);
    ctx.body = signNewUser.message;
  })
  .post('/signin', async (ctx, next) => {
    const signed = signin(ctx, jwt);
    const session = ctx.session;
    if (signed.ok) session.state = { name: signed.name }
    next();
  });



router
  .get('/posts', koajwt, async (ctx, next) => {
    const session = ctx.session;
    console.log(decoded);
    const posts = await getArticle('Hello people', 'We are aliens');
  })
  .post('/posts', koajwt, async (ctx, next) => {
    const session = ctx.session;
    const allPosts = addArticle(session.state, posts.data);
    ctx.body = allPosts;
  });;

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koajwt({ secret: 'shared-secret' }));

app.listen(3000);