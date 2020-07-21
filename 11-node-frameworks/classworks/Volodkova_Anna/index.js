import {incCounter, schema} from "./functions";

const koa = require('koa');
const serve = require('koa-static');
const session = require('koa-generic-session');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');


const app = new koa();

app.use(bodyParser());

app.use(serve(`public`));

app.use(session());
const inc = incCounter(session);

const router = new Router();

let mySummerObj;

router.post('/summer', (ctx) => {
  inc();
  const {error, value} = schema.validate(ctx.request.body);
  if (!error) {
    mySummerObj = value;
    console.log(value);
    ctx.status = 200;
  } else {
    ctx.body = "Not valid name or mark";
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async (ctx, next) => {
  await next();

  if (ctx.request.path !== '/favicon.ico')
    console.log("koko");
});

app.use((ctx) => {
  if (ctx.request.path !== '/favicon.ico')
  {
    ctx.body = {
      "sessionVisits":"Session" + inc()
    };
  }
})

app.listen(3001);
