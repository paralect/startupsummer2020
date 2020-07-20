const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();


app.use(serve('./home.html'));
app.use(serve('.'));

app.listen(3000);