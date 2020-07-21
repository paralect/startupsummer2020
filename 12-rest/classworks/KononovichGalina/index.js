const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const fetch = require("fetch");
const url = 'https://porfirevich.ru';

const app = new koa();
const router = new Router();

app.use(bodyParser());

let data = [];
function getPasswordHash(allData) {
  const key = crypto.pbkdf2Sync(allData.password, 'salt', 100000, 64, 'sha512').toString('hex');
  user ={hash: key, password: allData.password, login:allData.login};
  return user;
} 

router.post('/reg', async (ctx) => {
  ctx.body = ctx.request.body;
  data.push(getPasswordHash(ctx.request.body));
});


router.post('/login', async (ctx) => {
  ctx.body = ctx.request.body;
  const currentUser = getPasswordHash(ctx.request.body)

  const [flag] = data.filter(item => {
    if(item.hash === currentUser.hash && item.login === currentUser.login){
      return item;
    };
  });

 if(flag) {
  const secret = 'secret';
  const token = jwt.sign(flag, secret);
  ctx.body = token;
  console.log(token);


  const phrases= "fgfg";
  const response = await fetch(url, {
    method: 'POST', 
    body: JSON.stringify(phrases), 
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/2020.3.3',
    }
  })
  .then(res => res.json());

  // const json = await response.json();
  // console.log('str', JSON.stringify(json));

 }
});


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);