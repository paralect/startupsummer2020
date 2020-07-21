const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const crypto = require('crypto');

const getHash = (string) => crypto.pbkdf2Sync(string, 'salt', 100000, 64, 'sha512').toString('hex');

const createDatabase = () => ({
  users: [
    JSON.parse(fs.readFileSync('./data.json').toString('utf8')),
  ],
});

const getDatabase = () => (fs.readFileSync('./data.json').toString('utf8') ? createDatabase() : { users: [] });

const app = new Koa();
const router = new Router();

router
  .post('/signin', async (context, next) => {
    const data = JSON.parse(fs.readFileSync('./data.json').toString('utf8'));
    console.log(getDatabase());
  })
  .post('/signup', async (context, next) => {
    context.request.body.password = getHash(context.request.body.password);
    fs.writeFileSync('./data.json', JSON.stringify(context.request.body));
    console.log(context.request.body);
  });

app
  .use(bodyParser())
  .use(router.routes());

app.listen(3000);
