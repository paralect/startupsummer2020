let session = require('koa-generic-session');
let koa = require('koa');
var app = new koa();
app.keys = ['keys', 'keykeys'];
app.use(session());

app.use(async (ctx) => {
    
  switch (ctx.path) {
  case '/get':
    await get(ctx);
    break;
  case '/remove':
    remove(ctx);
    break;
  }
});

async function get(ctx) {
  var session = ctx.session;
  session.count = session.count || 0;
  session.count++;
  ctx.body = session.count;
}

function remove(ctx) {
    ctx.session = null;
    ctx.body = 0;
}

app.listen(3000);