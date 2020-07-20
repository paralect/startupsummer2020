const koa = require('koa');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  mark: Joi.number(),

});


const app = new koa();
app.use(bodyParser());

//app.use(serve(`public`));

let mySummerObj;
app.use(async (ctx, next) => {
  if (ctx.request.method === "POST") {
    const {error, value} = schema.validate(ctx.request.body);
    if (!error) {
      mySummerObj = value;
      console.log(value);
    } else {
      console.log('Not valid');
    }
  }
  await next();
})

app.use(async (ctx, next) => {
  await next();
  if (ctx.request.path !== '/favicon.ico')
    console.log("koko");
});

app.use(session());

app.use((ctx) => {
  if (ctx.request.path !== '/favicon.ico')
    get(ctx);
  //ctx.body = 'Hello World';
})


app.listen(3001);

const get = (ctx) => {
  const s = session;
  s.count = s.count || 0;
  s.count++;
  ctx.body = 'Session ' + s.count;
}