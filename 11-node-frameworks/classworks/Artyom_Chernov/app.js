const Koa = require('koa');
const app = new Koa();
const router = require('./routes');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

app.use(cors());
app.use(bodyParser());
app.use(router.routes)
app.use(router.session);
app.use(require('koa-static')('./'));
app.use(serve('.'));

app.keys = ['keys', 'keykeys'];

app.listen(3000);