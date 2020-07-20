const Router = require('koa-router');
const app = new Router();
const schema = require('./schemas')
const session = require('koa-generic-session');

const state = {
  formData: [],
  session: {}
};

app.use(session());

app.get('/', async (ctx) => {
  const session = get(ctx)
  ctx.body = session;
});

app.post('/sendForm', async (ctx) => {
  const { error, value } = schema.validate(ctx.request.body)
  const session = get(ctx);
  state.formData = [...state.formData, value];
  state.session = {...get(ctx)};
  console.log('state ', state)
  ctx.body = `${error || JSON.stringify(value)}\n\n ${JSON.stringify(session)}`;
});

app.get('/getData', async (ctx) => {
  ctx.body = JSON.stringify(state);
});

function get(ctx) {
  const session = ctx.session;
  session.count = session.count || 0;
  session.count++;
  return { count: session.count, date: new Date() };
}

function remove(ctx) {
  ctx.session = null;
  ctx.body = 0;
}

module.exports = {routes: app.routes(), session: session()};
