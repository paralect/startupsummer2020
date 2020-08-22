const Koa = require("koa");
const app = new Koa();

const koaStatic = require("koa-static");
const session = require("koa-generic-session");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router");
const Joi = require("joi");
const rout = router();

app.keys = ["secret-key-one", "secret-key-two"];

const schema = Joi.object({
  name: Joi.string(),
  surname: Joi.string().required(),
  description: Joi.string().min(3),
  mark: Joi.string(),
});

rout.get("/get", (ctx) => {
  ctx.response.body = ctx.session.count;
});

rout.post("/rest", (ctx) => {
  const { error, value } = schema.validate(ctx.request.body);
  if (error) {
    ctx.body = error.details[0].message;
  } else {
    ctx.body = JSON.stringify(value, null, 2);
  }
});

const increaseCount = (ctx) => {
  ctx.session.count = ctx.session.count || 0;
  ctx.session.count++;
};

app.use(session());
app.use(bodyParser());
app.use(async (ctx, next) => {
  await increaseCount(ctx)
  await next()
});

app.use(koaStatic("./public"));
app.use(rout.routes());
app.listen(3000);
