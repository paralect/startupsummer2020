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
const privateRouter = router();
const schema = joi.object({
  login: joi.string().required(),
  password: joi.string().required(),
});
const interviewSchema = joi.array().items(joi.string().pattern(/\?$/)).min(4);
const articleSchema = joi.array().items(joi.string()).min(3);

app.use(bodyParser());

app.use(publicRoutes.routes());

publicRoutes.post('/signup', async (ctx) => {
  schema.validate(ctx.request.body);
  db[ctx.request.body.login] = crypto.pbkdf2Sync(ctx.request.body.password, 'salt', 100000, 64, 'sha512').toString('hex');
  ctx.body = {};
});

publicRoutes.post('/signin', async (ctx) => {
  schema.validate(ctx.request.body);
  if (db[ctx.request.body.login] === crypto.pbkdf2Sync(ctx.request.body.password, 'salt', 100000, 64, 'sha512').toString('hex')) {
    ctx.body = jwt.sign({
      login: ctx.request.body.login,
    }, secret);
  } else {
    ctx.status = 401;
    ctx.body = 'FUCK U HACKER\n';
  }
});

app.use(koaJwt({ secret }));

app.use(privateRouter.routes());

privateRouter.post('/setdata/interview', async (ctx) => {
  interviewSchema.validate(ctx.request.body);
  const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  ctx.request.body.forEach(async (el) => {
    const info = await fetch('https://models.dobro.ai/gpt2/medium/', { method: 'POST', headers: { 'User-Agent': 'insomnia/2020.3.3' }, body: JSON.stringify({ prompt: el, length: 30, num_samples: 1 }) }).then((data) => data.json());
    obj.interview = { ...obj.interview, el: info.replies[0] };
  });
});

privateRouter.post('/setdata/articles', async (ctx) => {
  articleSchema.validate(ctx.request.body);
  const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  ctx.request.body.forEach(async (el) => {
    const info = await fetch('https://models.dobro.ai/gpt2/medium/', { method: 'POST', headers: { 'User-Agent': 'insomnia/2020.3.3' }, body: JSON.stringify({ prompt: el, length: 20, num_samples: 1 }) }).then((data) => data.json());
    obj.articles = { ...obj.articles, el: info.replies[0] };
  });
});

privateRouter.post('/setdata/tagline', async (ctx) => {
  articleSchema.validate(ctx.request.body);
  const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  ctx.request.body.forEach(async (el) => {
    const info = await fetch('https://models.dobro.ai/gpt2/medium/', { method: 'POST', headers: { 'User-Agent': 'insomnia/2020.3.3' }, body: JSON.stringify({ prompt: el, length: 3, num_samples: 1 }) }).then((data) => data.json());
    obj.tagline = { ...obj.tagline, el: info.replies[0] };
  });
});

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
