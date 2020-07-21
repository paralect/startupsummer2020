const Koa = require('koa');
const fs = require('fs');
const bodyParcer = require('koa-body')();
const Router = require('@koa/router');
const JWT = require('jsonwebtoken');
const jwt = require('koa-jwt');
const axios = require('axios');
const fetch = require('node-fetch');
const cors = require('@koa/cors');
const Crypto = require('crypto-js');

const app = new Koa();
const router = new Router();
app.use(cors());

const users = [];

router.post('/signup', bodyParcer, (ctx) => {
  users.push(ctx.request.body);
  fs.writeFile('users.json', JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
  ctx.body = 'user was added';
});

router.post('/signin', bodyParcer, (ctx) => {
  const usersLits = JSON.parse(fs.readFileSync('users.json'));
  let index = usersLits.findIndex((str) => str === ctx.request.body);
  const token = JWT.sign(usersLits[index], 'killmeplz');
  ctx.body = token;
});
app.use(jwt({ secret: 'killmeplz' }));
router.post('/phrase', bodyParcer, async (ctx) => {
  ctx.body = await axios.post('https://models.dobro.ai/gpt2/medium/', ctx.request.body, {
    headers: { 'User-Agent': 'insomnia/2020.3.3' } });
});
app.use(router.routes());
app.listen(8888);
console.log('listening on port 8888');
