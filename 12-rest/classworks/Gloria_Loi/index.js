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
let user;

public.post(
  '/signup',
  async ({
    request: {
      body: { password, login },
    },
    response
  }) => {
    const pw = crypto
      .pbkdf2Sync(password, 'salt', 100000, 64, 'sha512')
      .toString('hex');
    const user = {
      login,
      password: pw,
    };
    users.push(user);
    fs.writeFileSync('./database/file.json', JSON.stringify(users, null, 2));
    response.body = JSON.stringify({
      message: 'completed',
    });
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
      const pw = crypto
        .pbkdf2Sync(password, 'salt', 100000, 64, 'sha512')
        .toString('hex');
      [user] = users.filter((el) => el.login === login);
      if (user) {
        if (pw === user.password) {
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
        body: { arr },
      },
      response,
    }) => {
      const tags = JSON.parse(fs.readFileSync('./database/tags.json'));
      const requestBody = {
        prompt: arr.join(''),
        length: 10,
        num_samples: 3,
      };
      const fetchData = await fetch('https://models.dobro.ai/gpt2/medium/', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'User-Agent': 'insomnia/2020.3.3',
          'Content-Type': 'application/json',
        },
      });

      const res = await fetchData.json();
      const tag = {
        autorName: user.login, 
        tags: arr, 
        replies: res.replies
      };
      tags.push(tag);
      fs.writeFileSync('./database/tags.json', JSON.stringify(tags, null, 2));
      if (res)
        response.body = JSON.stringify({
          message: 'successfully posted',
        });
    }
  )
  .post(
    '/taglines',
    async ({
      request: {
        body: { combination },
      },
      response,
    }) => {
      const taglines = JSON.parse(fs.readFileSync('./database/tagline.json'));
      const requestBody = {
        prompt: combination,
        length: 10,
        num_samples: 1,
      };
      const fetchData = await fetch('https://models.dobro.ai/gpt2/medium/', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/2020.3.3',
        },
      });

      const data = await fetchData.json();

      const tagline = {
        author: user.login,
        combination,
        reply: data.replies,
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
        body: { arr },
      },
      response,
    }) => {
      const inter = [];
      const inters = JSON.parse(fs.readFileSync('./database/interview.json'));

      for await (const question of arr) {
        const fetchedData = await fetch('https://models.dobro.ai/gpt2/medium/', {
          method: 'POST',
          body: JSON.stringify({
            prompt: question,
            length: 10,
            num_samples: 1,
          }),
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/2020.3.3',
          },
        });

        const json = await fetchedData.json();
        const [reply] = json.replies;
        inter.push(question);
        inter.push(reply);
      }
      inters.push({ author: user.login, inter});
      response.body = JSON.stringify({
        author: user.login, 
        inter
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
