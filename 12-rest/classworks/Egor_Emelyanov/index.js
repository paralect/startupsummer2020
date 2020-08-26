const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const joi = require('joi');
const koaJwt = require('koa-jwt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs');
const fetch = require('node-fetch');

const secret = 'chikibamboni';

const db = {};

const app = new Koa();
const publicRoutes = router();
const privateRoutes = router();
const schema = joi.object({
  login: joi.string().required(),
  password: joi.string().required(),
});
const interviewSchema = joi.array().items(joi.string().pattern(/\?$/)).min(4);
const articleSchema = joi.array().items(joi.string()).min(3);

const createPassword = (login, password) => {
  return db[login] = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');
}

const checkPassword = (login, password) => {
  return db[login] === crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');
}

app.use(bodyParser());

app.use(publicRoutes.routes());

publicRoutes.post('/signup', async (ctx) => {
  const data = schema.validate(ctx.request.body);
  createPassword(data.login, data.password);
  ctx.body = {};
});

publicRoutes.post('/signin', async (ctx) => {
  const data = schema.validate(ctx.request.body);
  if (checkPassword(data.login, data.password)) {
    ctx.body = jwt.sign({
      login: data.login,
    }, secret);
  } else {
    ctx.status = 401;
    ctx.body = 'FUCK U HACKER\n';
  }
});

app.use(koaJwt({ secret }));

app.use(privateRoutes.routes());

privateRoutes.post('/interview', async (ctx) => {
  const data = interviewSchema.validate(ctx.request.body);
  const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  data.forEach(async (el) => {
    const info = await fetch(
      'https://models.dobro.ai/gpt2/medium/',
      {
        method: 'POST',
        headers: {
          'User-Agent': 'insomnia/2020.3.3',
        },
        body: JSON.stringify({
          prompt: el,
          length: 30,
          num_samples: 1
        }),
      }).then((data) => data.json());
    obj.interview = { ...obj.interview, el: info.replies[0] };
  });
});

privateRoutes.post('/articles', async (ctx) => {
  const data = articleSchema.validate(ctx.request.body);
  const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  data.forEach(async (el) => {
    const info = await fetch(
      'https://models.dobro.ai/gpt2/medium/',
      {
        method: 'POST',
        headers: {
          'User-Agent': 'insomnia/2020.3.3',
        },
        body: JSON.stringify({
          prompt: el,
          length: 20,
          num_samples: 1,
        }),
      }).then((data) => data.json());
    obj.articles = { ...obj.articles, el: info.replies[0] };
  });
});

privateRoutes.post('/tagline', async (ctx) => {
  const data = articleSchema.validate(ctx.request.body);
  const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  data.forEach(async (el) => {
    const info = await fetch(
      'https://models.dobro.ai/gpt2/medium/',
      {
        method: 'POST',
        headers: {
          'User-Agent': 'insomnia/2020.3.3'
        },
        body: JSON.stringify({
          prompt: el,
          length: 3,
          num_samples: 1,
        }),
      }).then((data) => data.json());
    obj.tagline = { ...obj.tagline, el: info.replies[0] };
  });
});

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
