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

const toHash = (data) => crypto.pbkdf2Sync(data, 'very-simple-secret', 100000, 64, 'sha512').toString('hex');

const PARF_URL = 'https://models.dobro.ai/gpt2/medium/';
const SECRET = fs.readFileSync('./public.key', 'utf8');

const generateArticle = async (prompt) => {
  try {
    const res = await axios.post(PARF_URL, {
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
    return res;
  } catch(e) {
    console.log(e)
  };
};

const getResourcesDataFromDB = () => JSON.parse(fs.readFileSync('./db/resources.json', 'utf8'));

const putUserToDB = (user) => {
  const usersFromDB = JSON.parse(fs.readFileSync('./db/user.json', 'utf8'));
  const dataFromDB = getResourcesDataFromDB();
  let userLogins = [];
  if (usersFromDB.length) {
    const userLogins = usersFromDB.array.forEach(user => {
      userLogins.push(user.login);
    });
  }
  userLogins.push(user.login);
  dataFromDB.users = [...userLogins];
  fs.writeFile('./db/resources.json', JSON.stringify(dataFromDB), (err) => {
    if (err) {
        throw err;
    }
  });
}

const putArticleToDB = (article) => {
  const dataFromDB = getResourcesDataFromDB();
  console.log('Data from db', dataFromDB);
  dataFromDB.articles.push(article);
  fs.writeFile('./db/resources.json', JSON.stringify(dataFromDB), (err) => {
    if (err) {
        throw err;
    }
  });
}

const putInterviewToDB = (interview) => {
  const dataFromDB = getResourcesDataFromDB();
  dataFromDB.interviews.push(interview);
  fs.writeFile('./db/resources.json', JSON.stringify(dataFromDB), (err) => {
    if (err) {
        throw err;
    }
  });
}

const putTaglineToDB = (tagline) => {
  const dataFromDB = getResourcesDataFromDB();
  dataFromDB.taglines.push(tagline);
  fs.writeFile('./db/resources.json', JSON.stringify(dataFromDB), (err) => {
    if (err) {
        throw err;
    }
  });
}

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

publicRouter
  .get('/resources/user', async (ctx) => {
    ctx.body = JSON.parse(fs.readFileSync('./db/user.json', 'utf8')).login;
  })
  .get('/resources/articles', async (ctx) => {
    ctx.body = JSON.parse(fs.readFileSync('./db/resources.json', 'utf8')).articles;
  })
  .get('/resources/interviews', async (ctx) => {
    ctx.body = JSON.parse(fs.readFileSync('./db/resources.json', 'utf8')).interviews;
  })
  .get('/resources/taglines', async (ctx) => {
    ctx.body = JSON.parse(fs.readFileSync('./db/resources.json', 'utf8')).taglines;
  });

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
  const hash = toHash(user.value.password);
  if (userFromDB.login === user.value.login && userFromDB.password === hash) {
    const token = jsonWebToken.sign({ login: user.value.login }, SECRET);
    ctx.body = token;
  } else {
    ctx.status = 401;
    ctx.body = 'Login pls';
  }
});

app.use(koajwt({ secret: SECRET }));

app.use(privateRouter.routes());

privateRouter
  .post('/write_resources/user', async (ctx) => {
    putUserToDB(ctx.request.body);
    ctx.body = JSON.parse(fs.readFileSync('./db/resources.json', 'utf8')).users;
  })
  .post('/write_resources/article', async (ctx) => {
    const textPrompt = ctx.request.body.prompt;
    const article = await generateArticle(textPrompt).then(res => [res.data.replies[0], res.data.replies[1], res.data.replies[2]].join(''));
    putArticleToDB(article);
    ctx.body = getResourcesDataFromDB();
  })
  .post('/write_resources/interview', async (ctx) => {
    const textPrompt = ctx.request.body.prompt;
    const interview = await generateArticle(textPrompt).then(res => res.data.replies.join(''));
    putInterviewToDB(interview);
    ctx.body = getResourcesDataFromDB();
  })
  .post('/write_resources/tagline', async (ctx) => {
    const textPrompt = ctx.request.body.prompt;
    const tagline = await generateArticle(textPrompt).then(res => res.data.replies[0]);
    putTaglineToDB(tagline);
    ctx.body = getResourcesDataFromDB();
  });

app.listen(3000, () => {
  console.log('Server was started');
});
