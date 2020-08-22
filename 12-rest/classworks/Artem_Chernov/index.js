require('./models/db.connection')
const Koa = require('koa');
const app = new Koa();
const publicRouter = require('./routes/publicRoutes');
const privateRouter = require('./routes/privateRoutes');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const jwt = require('koa-jwt');

app.use(cors());
app.use(bodyParser());
app.use(publicRouter);
app.use(protectedResourseHandler);
app.use(jwt({ secret: 'secret'}));
app.use(privateRouter)

app.listen(3000);

function protectedResourseHandler(ctx, next){
  return next().catch((err) => {
    if (401 === err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
}
