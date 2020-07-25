const Koa = require("koa");
const app = new Koa();

const koaStatic = require("koa-static");
const session = require("koa-generic-session");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router");
const Joi = require("joi");
const rout = router();

app.use(koaStatic("./public"));
app.use(bodyParser());
app.use(session());
app.use(rout.middleware());

const schema = Joi.object({
  name: Joi.string(),
  surname: Joi.string().required(),
  description: Joi.string().min(3),
  mark: Joi.string(),
});

rout.post("/", (ctx) => {
  const { error, value } = schema.validate(ctx.request.body);
  if (error) {
    console.log(error);
  } else {
    console.log(value);
    ctx.body = JSON.stringify(value);
  }
});

rout.get("/get", async (ctx) => {
  var amount = session;
  amount.count = amount.count || 0;
  amount.count++;
  ctx.body = amount.count;
});

app.use(async (ctx, next) => {
  ctx.body = 'Middleware';
  next();
});
app.use(rout.routes());
app.listen(3000);
