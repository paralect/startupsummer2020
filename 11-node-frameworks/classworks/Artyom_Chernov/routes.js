const Router = require('koa-router');
const app = new Router();
const schema = require('./schemas');

app.get('/', async (ctx) => {
  ctx.body = 'works';
});

app.post('/send-form', async (ctx) => {
  const { error, value } = schema.validate(ctx.request.body);
  if (!error) {
    ctx.session.users.push({...value});
    console.log(ctx.session.users);
    ctx.body = ctx.session;
  } else {
    ctx.body = error;
  }
});

app.get('/get-data', async (ctx) => {
  ctx.body = ctx.session;
});

module.exports = app.routes();