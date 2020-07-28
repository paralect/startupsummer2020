const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const koajwt = require('koa-jwt');
const axios = require('axios');
const fs = require('fs');

const app = new Koa();
const publicRouter = new Router();
const privateRouter = new Router();
const secret = 'ololo';
let token = '';

const db = {};

app.use(bodyParser())

publicRouter.post('/signup', (ctx, next) => {
  let user = ctx.request.body.login;
  db[user] = ctx.request.body.password;
  console.log(db);
})

publicRouter.post('/signin', (ctx, next) => {
  let login = ctx.request.body.login;
  for(let key in db){
    if(key === login){
      if(db[key] === ctx.request.body.password){
        token = jwt.sign(ctx.request.body.password, secret); 
      }
    }
  }
  ctx.body = token;
});

privateRouter.post('/privateUserPage/slogan', async (ctx, next) => {
  const body = ctx.request.body;
  console.log(body);
  await axios.post('https://models.dobro.ai/gpt2/medium/', JSON.stringify(body),{headers:{'User-Agent': 'insomnia/2020.3.3'}})
  .then(response => {
    fs.writeFileSync('slogan.json', JSON.stringify(response.data.replies));
  }).catch(err => console.log(err))
})

const fetch = (prompt, length, num_samples) => axios.post(
  'https://models.dobro.ai/gpt2/medium/', 
  JSON.stringify({
    prompt, 
    length, 
    num_samples
  }),{ 
    headers:{'User-Agent': 'insomnia/2020.3.3',
   }})

privateRouter.post('/privateUserPage/dialog', async (ctx, next) => {
  const { body } = ctx.request;
  const responses = [];
  try {
    const { data: lastResponseData } = await body.prompt.reduce(async (previousPromise, nextPrompt) => {
      const previousResponse = await previousPromise;
      if (previousResponse && previousResponse.data) {
        responses.push(previousResponse.data);
      }
      return fetch(nextPrompt, body.length, body.num_samples);
    }, Promise.resolve());
    responses.push(lastResponseData);
    fs.writeFileSync('dialog.json', JSON.stringify(responses));
  } catch (e) {
    console.log(e);
  }
})

privateRouter.post('/privateUserPage/article', async (ctx, next) => {
  const { body } = ctx.request;
  const responses = [];
  try {
    const { data: lastResponseData } = await body.prompt.reduce(async (previousPromise, nextPrompt) => {
      const previousResponse = await previousPromise;
      if (previousResponse && previousResponse.data) {
        responses.push(previousResponse.data);
      }
      return fetch(nextPrompt, body.length, body.num_samples);
    }, Promise.resolve());
    responses.push(lastResponseData);
    fs.writeFileSync('article.json', JSON.stringify(responses));
  } catch (e) {
    console.log(e);
  }
})

app.use(publicRouter.routes());
app.use(koajwt({ secret : secret }));
app.use(privateRouter.routes())

app.use(publicRouter.allowedMethods());
app.use(privateRouter.allowedMethods());
app.listen(3000);