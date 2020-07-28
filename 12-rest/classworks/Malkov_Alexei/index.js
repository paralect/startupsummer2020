let koa = require('koa');
let Router = require('koa-router');
let session = require('koa-generic-session');
const serve = require('koa-static');
const send  = require('koa-send');
const bodyParser = require('koa-bodyparser');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');
const signup = require('./signup');
const signin = require('./signin');
const bd = require('./base.json');
const checkUser = require('./checkUser');
const getArticle = require('./getArticle');
const addArticle = require('./addArticle');

let app = new koa();
let router = new Router();
let token;

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
  })
  .get('/posts', async (ctx, next) => {
    const session = ctx.session;
    if (session.token) {
      const decoded = jwt.verify(session.token, 'shhhhh');
      console.log(decoded);
      const posts = await getArticle('Hello people', 'We are aliens');
      console.log(posts.data);
      console.log(session.state);
      const allPosts = addArticle(session.state, posts.data);
      if (decoded.foo === 'bar') ctx.body = allPosts;
    } else console.log('AAAAAAAAAAAAAAAAA');
  });

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);