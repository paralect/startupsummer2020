const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('koa-jwt');
const fs = require('fs');
const fetch = require('node-fetch');

const users = JSON.parse(fs.readFileSync('./users.json'));
const taglines = JSON.parse(fs.readFileSync('./taglines.json'));
const SECRETKEY = 'shhhhh';

const app = new koa();
const publicRouter = new Router();
const privateRouter = new Router();

publicRouter
  .post('/signUp', async (ctx) => {
    const logIn = ctx.request.body.logIn;
    const password = ctx.request.body.password;
    const passwordHash = getHash(password);
    const userObj = {
      logIn: logIn,
      password: passwordHash,
    }
    users.push(userObj);
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
    ctx.status = 204;
    ctx.body = JSON.stringify({});
  })
  .post('/signIn', (ctx) => {
    const logIn = ctx.request.body.logIn;
    const password = ctx.request.body.password;
    const passwordHash = myCripto(password);

    const userObj = {
      logIn: logIn,
      password: passwordHash,
    }
    const user = users.find((u) => {
      return userObj.logIn === u.logIn;
    });

    const isLogIn = user.password === passwordHash;
    if (isLogIn) {
      const token = jsonwebtoken.sign({logIn: logIn}, SECRETKEY);
      ctx.status = 200;
      ctx.body = JSON.stringify({token});
    } else {
      ctx.status = 400;
      ctx.body = JSON.stringify({ error: 'Incorrect login and password' });
    }
  })
  .get('/users', (ctx) => {
    ctx.body = JSON.parse(fs.readFileSync('./users.json'));
  })
  .get('/taglines', (ctx) => {
    ctx.body = JSON.parse(fs.readFileSync('./taglines.json'));
  })

;

privateRouter
  .post('/tagline', (ctx) => {

    (async () => {
      const body = {
        prompt: ctx.request.body.join(' '),
        length: 30,
        num_samples: 1
      };

      const response = await fetch('https://models.dobro.ai/gpt2/medium/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2020.3.3'}
      });

      const json = await response.json();

      const replies = json.replies;

      const tagline = [...ctx.request.body, ...replies].join(' ');

      taglines.push(tagline);
      fs.writeFileSync('./taglines.json', JSON.stringify(taglines, null, 2));

      ctx.body = JSON.stringify(tagline);
    })();
  })
;

app.use(bodyParser());

app
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods());

app.use(jwt({secret: SECRETKEY}));

app
  .use(privateRouter.routes())
  .use(privateRouter.allowedMethods());

app.listen(3000);


function getHash(password, salt='salt', iterations = 10000, keylen=64, digest='sha512') {
  return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex');
}
