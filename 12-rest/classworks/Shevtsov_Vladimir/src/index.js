const Koa = require('koa');
const session = require('koa-session');
const koaJwt = require('koa-jwt');
const jwt = require('jsonwebtoken');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const crypto = require('crypto');
const fs = require('fs').promises;
const axios = require('axios');

const app = new Koa();
const router = new Router();
const jwtSecret = process.env.SECRET;

const parfUrl = 'https://models.dobro.ai/gpt2/medium/';

const genInterview = async (prompt) => {
  const res = await axios.post(parfUrl, {
    prompt,
    length: 30,
    num_samples: 4,
  },
    {
      headers: {
        'User-Agent': 'insomnia/2020.3.3',
      },
      timeout: 10000,
    });
  return res.data.replies.join('\r\n');
}

const genArticle = async (prompt) => {
  const res = await axios.post(parfUrl, {
    prompt,
    length: 30,
    num_samples: 4,
  },
    {
      headers: {
        'User-Agent': 'insomnia/2020.3.3',
      },
      timeout: 10000,
    });
  return res.data.replies.join('\r\n');
};

const genTagline = async (prompt) => {
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
  return res.data.replies[0];
}

const hashFunction = (password) => crypto
  .pbkdf2Sync(password, 'salt', 100000, 64, 'sha512')
  .toString('hex');

router.post('/signin', async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const usersDb = await fs.readFile('users.json');
  const users = JSON.parse(usersDb);
  const providedPwdHash = hashFunction(password);

  if (users[name]?.pwdHash === providedPwdHash) {
    const token = jwt.sign({ name }, jwtSecret);
    ctx.session.token = token;
    ctx.body = 'Sign in success';
  } else {
    ctx.status = 401;
    ctx.body = 'Sign in error';
  }

  return next();
});

router.post('/signup', async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const pwdHash = hashFunction(password);
  const dbUsers = await fs.readFile('users.json');
  const users = JSON.parse(dbUsers);
  users[name] = { pwdHash };

  await fs.writeFile('users.json', JSON.stringify(users));

  return next();
});

const addSimpleGetPost = (dbFile, route, generateFunc) => {
  router.get(route, async (ctx, next) => {
    const dbData = await fs.readFile(dbFile);
    const data = JSON.parse(dbData);
    ctx.body = data;
    return next();
  });

  router.post(route, async (ctx, next) => {
    if (ctx.state.jwtOriginalError) {
      ctx.status = 403;
    } else {
      const { prompt } = ctx.request.body;
      const dbData = await fs.readFile(dbFile);
      const data = JSON.parse(dbData);
      data[prompt] = await generateFunc(prompt);
      await fs.writeFile(dbFile, JSON.stringify(data));
      ctx.status = 200;
      return next();
    }
  });
};

addSimpleGetPost('articles.json', '/article', genArticle);
addSimpleGetPost('taglines.json', '/tagline', genTagline);
addSimpleGetPost('interviews.json', '/interview', genInterview);

const getToken = (ctx) => ctx.session.token;

app.keys = ['secretsdaf'];
app.use(session(app));
app.use(bodyParser());
app.use(koaJwt({ secret: jwtSecret, passthrough: true, getToken }));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log('Listening...');
