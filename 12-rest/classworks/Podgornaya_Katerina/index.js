const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const crypto = require('crypto');
const { sign: createJwt } = require('jsonwebtoken');
const jwt = require('koa-jwt');
const { promisify } = require('util');
const axios = require('axios').default;

const writeFile = promisify(fs.writeFile);

// usersCollection
if (!fs.existsSync('./database/usersCollection.json')) {
  console.log(1231);
  fs.writeFileSync('./database/usersCollection.json', JSON.stringify({ users: [] }, null, 2));
}

// slogansCollection
if (!fs.existsSync('./database/slogansCollection.json')) {
  console.log(1231);
  fs.writeFileSync('./database/slogansCollection.json', JSON.stringify({ slogans: [] }, null, 2));
}

// interviewsCollection
if (!fs.existsSync('./database/interviewsCollection.json')) {
  console.log(1231);
  fs.writeFileSync('./database/interviewsCollection.json', JSON.stringify({ interviews: [] }, null, 2));
}

// articlesCollection
if (!fs.existsSync('./database/articlesCollection.json')) {
  console.log(1231);
  fs.writeFileSync('./database/articlesCollection.json', JSON.stringify({ articles: [] }, null, 2));
}

const usersCollection = JSON.parse(fs.readFileSync('./database/usersCollection.json'));
const slogansCollection = JSON.parse(fs.readFileSync('./database/slogansCollection.json'));
const interviewsCollection = JSON.parse(fs.readFileSync('./database/interviewsCollection.json'));
const articlesCollection = JSON.parse(fs.readFileSync('./database/articlesCollection.json'));

const getHash = (string) => crypto.pbkdf2Sync(string, 'salt', 100000, 64, 'sha512').toString('hex');
const secretKey = 'akunaQWEmatataRTYbananaUIOPblabla';

const app = new Koa();
const publicRouter = new Router();
const privateRouter = new Router();

publicRouter
  .post('/signin', async (ctx) => {
    const { password, username } = ctx.request.body;
    const user = usersCollection.users.find((user) => user.username === username);
    console.log(user);
    const isUserExists = user;
    if (isUserExists) {
      if (getHash(password) === user.passwordHash) {
        const token = createJwt({ name: user.username }, secretKey);
        console.log(token);
        ctx.body = {
          message: 'you are logged in',
        };
      }
    } else {
      ctx.body = {
        message: 'invalid data',
      };
    }
  })
  .post('/signup', async (ctx) => {
    const { password, username } = ctx.request.body;
    const isUserExists = Boolean(usersCollection.users.find((user) => user.username === username));
    if (isUserExists) {
      ctx.body = {
        message: 'this username is already exists',
      };
      return;
    }
    const passwordHash = getHash(password);
    usersCollection.users.push({ username, passwordHash });
    await writeFile('./database/usersCollection.json', JSON.stringify(usersCollection, null, 2));
    ctx.body = {
      message: 'you are registered',
      username,
    };
  })
  .get('/slogan', async (ctx) => {
    ctx.body = {
      data: slogansCollection,
    };
  })
  .get('/interview', async (ctx) => {
    ctx.body = {
      data: interviewsCollection,
    };
  })
  .get('/article', async (ctx) => {
    ctx.body = {
      data: articlesCollection,
    };
  });

privateRouter
  .post('/slogan', async (ctx) => {
    const { phrase } = ctx.request.body;
    console.log(phrase);

    const generatedSlogan = await axios.post('https://models.dobro.ai/gpt2/medium/', {
      prompt: phrase,
      length: 5,
      num_samples: 1,
    }, {
      headers: { 'User-Agent': 'insomnia/2020.3.3' },
    });
    slogansCollection.slogans.push({
      phrase,
      replies: generatedSlogan.data.replies,
    });
    await writeFile('./database/slogansCollection.json', JSON.stringify(slogansCollection, null, 2));

    ctx.body = {
      slogans: {
        phrase,
        replies: generatedSlogan.data.replies,
      },
    };
  })
  .post('/interview', async (ctx) => {
    const { questions } = ctx.request.body;
    const interview = [];

    for (const question of questions) {
      const generatedAnswer = await axios.post('https://models.dobro.ai/gpt2/medium/', {
        prompt: question,
        length: 10,
        num_samples: 1,
      }, {
        headers: { 'User-Agent': 'insomnia/2020.3.3' },
      });

      interview.push(question, generatedAnswer.data.replies[0]);
    }
    interviewsCollection.interviews.push(interview);
    await writeFile('./database/interviewsCollection.json', JSON.stringify(interviewsCollection, null, 2));

    ctx.body = {
      interview: interviewsCollection.interviews[interviewsCollection.interviews.length - 1],
    };
  })
  .post('/article', async (ctx) => {
    const { sentences } = ctx.request.body;
    const article = [];

    for (const sentence of sentences) {
      const generatedSentence = await axios.post('https://models.dobro.ai/gpt2/medium/', {
        prompt: sentence,
        length: 20,
        num_samples: 1,
      }, {
        headers: { 'User-Agent': 'insomnia/2020.3.3' },
      });

      article.push(sentence, generatedSentence.data.replies[0]);
    }
    articlesCollection.articles.push(article);
    await writeFile('./database/articlesCollection.json', JSON.stringify(articlesCollection, null, 2));

    ctx.body = {
      interview: articlesCollection.articles[articlesCollection.articles.length - 1],
    };
  });

app
  .use(bodyParser())
  .use(publicRouter.routes())
  .use(jwt({ secret: secretKey }))
  .use(privateRouter.routes());

app.listen(3000);
