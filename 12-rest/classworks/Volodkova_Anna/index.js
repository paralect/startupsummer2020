const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const publicRouter = new Router();
const privateRouter = new Router();
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('koa-jwt');
const  fs = require('fs');
const axios = require('axios');

const users = JSON.parse(fs.readFileSync('./users.json'));
const secretKey = 'shhhhh';

const app = new koa();

app.use(bodyParser());

publicRouter
  .post('/signUp', async (ctx, next) => {
    console.log('signUp body', ctx.request.body);
    const logIn = ctx.request.body.logIn;
    const password = ctx.request.body.password;
    const passwordHash = myCripto(password);
    const userObj = {
      logIn: logIn,
      password: passwordHash,
    }
    users.push(userObj);
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
    ctx.status = 200;
    ctx.body = 'Okay!';
  })
  .post('/signIn', (ctx, next) => {
    console.log('signIn body', ctx.request.body);
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
      const token = jsonwebtoken.sign({logIn: logIn}, secretKey);
      ctx.status = 200;
      ctx.body = token;
    } else {
      ctx.status = 400;
      ctx.body = 'Incorrect login and password\n';
    }
  });

const genArticle = async (prompt) => {
  try {
    const res = await axios.post(parfUrl, {
        prompt,
        length: 30,
        num_samples: 1,
      },
      {
        headers: {
          // 'Host': 'models.dobro.ai',
          'User-Agent': 'insomnia/2020.3.3',
          // 'Content-Type': 'application/json',
          // 'Accept': '*/*',
          // 'Content-Length': 58
        },
        timeout: 10000,
      });
    console.log(res.data);
    return res;
  } catch(e) {
    console.log(e)
  };
};



privateRouter
  //cтатья
  .post('/article', async (ctx, next) => {

  })
  //слоган
  .post('/tagline', (ctx, next) => {
    console.log('tagline', ctx.request.body.arr);
    ctx.status = 200;
    ctx.body = ctx.request.body.arr;


  })
  //интервью
  .post('/tagline', (ctx, next) => {

  });

app
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods());

app.use(jwt({secret: secretKey}));

app
  .use(privateRouter.routes())
  .use(privateRouter.allowedMethods());

app.listen(3001);


function myCripto(password, salt='salt', iterations = 10000, keylen=64, digest='sha512') {
  return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex');

}