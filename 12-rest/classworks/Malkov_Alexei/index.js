let koa = require('koa');
let Router = require('koa-router');
let session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');
const signin = require('./signin');
const bd = require('./base.json');
const checkUser = require('./checkUser');
const getArticle = require('./getArticle');
let app = new koa();
let router = new Router();
let token;

app.use(bodyParser());
app.keys = ['keys', 'keykeys'];
app.use(session());

router
  .get('/', (ctx, next) => {
    console.log(token);
  })
  .get('/signup', (ctx, next) => {
    const actions = 'action="http://localhost:3000/signup" method="post"';
    const form = `<form ${actions}><input name="name" type="text"><br><input name="password" type="text"><br><input type="submit" value="signup"></form>`;
    ctx.body = `<html><head></head><body>${form}</body></html>`;
  }).get('/signin', (ctx, next) => {
    const actions = 'action="http://localhost:3000/signin" method="post"';
    const form = `<form ${actions}><input name="name" type="text"><br><input name="password" type="text"><br><input type="submit" value="signin"></form>`;
    ctx.body = `<html><head></head><body>${form}</body></html>`;
  }).post('/signup', (ctx, next) => {
    const formData = ctx.request.body;
    signin(formData);
  }).post('/signin', (ctx, next) => {
    const formData = ctx.request.body;
    if (checkUser(formData)) {
      token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      const session = ctx.session;
      session.token = token;
      const link = "http://localhost:3000/posts";
      ctx.body = `<html><head></head><body><h1>Hello, ${formData.name}</h1><br><p>your token: ${token}</p><a href="${link}">posts</a></body></html>`;
    }
  }).get('/posts', async (ctx, next) => {
    const session = ctx.session;
    if (session.token) {
      const decoded = jwt.verify(session.token, 'shhhhh');
      console.log(decoded);
      const posts = await getArticle('Hello');
      if (decoded.foo === 'bar') ctx.body = posts;
    } else console.log('AAAAAAAAAAAAAAAAA');
  });

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);