const Koa = require('koa');
const Joi = require('joi')
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const Router = require('koa-router');
const koajwt = require('koa-jwt');
const jsonWebToken = require('jsonwebtoken');
const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');

const toHash = (data) => crypto.pbkdf2Sync(data, 'very-very-strong-secret', 100000, 64, 'sha512').toString('hex');

const parfUrl = 'https://models.dobro.ai/gpt2/medium/';

const genArticle = async (prompt) => {
  try {
    const res = await axios.post(parfUrl, {
      prompt,
      length: 30,
      num_samples: 1,
    },
    {
      headers: {
        'User-Agent': 'insomnia/2020.3.3',
      },
      timeout: 10000,
    });
    console.log(res.data);
    return res;
  } catch(e) {
    console.log(e)
  };
};
genArticle('hello');


const publicRouter = new Router();
const privateRouter = new Router();

const app = new Koa();

const schema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
});

app.keys = ['keys', 'keykeys'];
app.use(session());

app.use(bodyParser());

app.use(publicRouter.routes());

publicRouter.post('/signup', async (ctx) => {
  ctx.body = schema.validate(ctx.request.body);
  const user = {
    login: ctx.request.body.login,
    password: toHash(ctx.request.body.password),
  };
  fs.writeFile('./db/user.json', JSON.stringify(user), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
  });
});

publicRouter.post('/signin', async (ctx) => {
  const userFromDB = JSON.parse(fs.readFileSync('./db/user.json', 'utf8'));
  const user = schema.validate(ctx.request.body);
  console.log(user);
  const hash = toHash(user.value.password);
  if (userFromDB.login === user.value.login && userFromDB.password === hash) {
    const token = jsonWebToken.sign({ login: user.value.login }, 'brrr');
    ctx.body = token;
  } else {
    ctx.status = 401;
    ctx.body = 'Login pls';
  }
  
});

publicRouter.get('/resources', async (ctx) => {

});

app.use(koajwt({ secret: 'very-simple-secret' }));

app.use(privateRouter.routes());

privateRouter.post('/write_resources', async (ctx) => {
  const textPrompt = ctx.request.body;
  const dataFromDB = JSON.parse(fs.readFileSync('./db/user.json', 'utf8'));
  const fetchedData = await fetch('https://api.github.com/users/github', {prompt: textPrompt, length: 30, num_samples: 4}).then(res => res.json());
  console.log(fetchedData);
});

app.listen(3000, () => {
  console.log('Server was started');
});
