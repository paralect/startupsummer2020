const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const crypto = require('crypto');
const fs = require('fs');
const koaJwt = require('koa-jwt');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const public = Router();
const private = Router();

const mySecret = 'super-mega-ochen-secret';

const users = JSON.parse(fs.readFileSync('./database/file.json'));

const hashPassword = (password) =>
  crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');

const fetchData = async (requestBody) => {
  const result = await fetch('https://models.dobro.ai/gpt2/medium/', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'User-Agent': 'insomnia/2020.3.3',
      'Content-Type': 'application/json',
    },
  });

  let json = await result.json();
  return json.replies;
};

public.post(
  '/signup',
  async ({
    request: {
      body: { password, login },
    },
    response,
  }) => {
    const same = users.filter((user) => user.login === login);
    if (same.length === 0) {
      const user = {
        login,
        password: hashPassword(password),
      };
      users.push(user);
      fs.writeFileSync('./database/file.json', JSON.stringify(users, null, 2));
      response.body = JSON.stringify({
        message: 'completed',
      });
    } else {
      response.body = JSON.stringify({
        message: 'user with same login alredy exist',
      });
    }
  }
);

public
  .post(
    '/signin',
    async ({
      request: {
        body: { password, login },
      },
      response,
    }) => {
      const passwordHash = hashPassword(password);
      const [user] = users.filter((el) => el.login === login);
      if (user) {
        if (passwordHash === user.password) {
          const token = jwt.sign(user.login, mySecret);
          response.body = JSON.stringify({
            message: 'you are autorized!',
            token,
          });
        } else {
          response.body = JSON.stringify({ error: 'wrong password' });
        }
      } else {
        response.body = JSON.stringify({ error: 'wrong login' });
      }
    }
  )
  .get('/tags', (ctx) => {
    ctx.response.body = JSON.parse(fs.readFileSync('./database/tags.json'));
  })
  .get('/taglines', (ctx) => {
    ctx.response.body = JSON.parse(fs.readFileSync('./database/tagline.json'));
  })
  .get('/interviews', (ctx) => {
    ctx.response.body = JSON.parse(
      fs.readFileSync('./database/interview.json')
    );
  });

private
  .post(
    '/tags',
    async ({
      request: {
        body: { arr, author },
      },
      response,
    }) => {
      const tags = JSON.parse(fs.readFileSync('./database/tags.json'));
      const requestBody = {
        prompt: arr.join(''),
        length: 10,
        num_samples: 3,
      };
      const fetchedData = await fetchData(requestBody);
      const tag = {
        author,
        tags: arr,
        replies: fetchedData,
      };
      tags.push(tag);
      fs.writeFileSync('./database/tags.json', JSON.stringify(tags, null, 2));
      if (fetchedData)
        response.body = JSON.stringify({
          tag,
        });
    }
  )
  .post(
    '/taglines',
    async ({
      request: {
        body: { combination, author },
      },
      response,
    }) => {
      const taglines = JSON.parse(fs.readFileSync('./database/tagline.json'));
      const requestBody = {
        prompt: combination,
        length: 10,
        num_samples: 1,
      };
      const fetchedData = await fetchData(requestBody);
      const tagline = {
        author,
        combination,
        reply: fetchedData,
      };

      taglines.push(tagline);
      fs.writeFileSync(
        './database/tagline.json',
        JSON.stringify(taglines, null, 2)
      );
      if (response) {
        response.body = JSON.stringify({
          tagline,
        });
      }
    }
  )
  .post(
    '/interview',
    async ({
      request: {
        body: { arr, author },
      },
      response,
    }) => {
      const inter = [];
      const inters = JSON.parse(fs.readFileSync('./database/interview.json'));

      for await (const question of arr) {
        const requestBody = { prompt: question, length: 10, num_samples: 1 };
        const [reply] = await fetchData(requestBody);

        inter.push(question);
        inter.push(reply);
      }
      inters.push({ author, inter });
      response.body = JSON.stringify({
        author,
        inter,
      });
      fs.writeFileSync(
        './database/interview.json',
        JSON.stringify(inters, null, 2)
      );
    }
  );

const app = new Koa();

app.use(bodyParser());
app.use(public.routes());
app.use(koaJwt({ secret: mySecret }));
app.use(private.routes());

app.listen(3000);
