const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;
const url = 'https://porfirevich.ru';
const fs = require('fs');
const app = new koa();
const public = new Router();
const privat = new Router();

app.use(bodyParser());

let data = [];
// let slogans=[];
function getPasswordHash(allData) {
  const key = crypto.pbkdf2Sync(allData.password, 'salt', 100000, 64, 'sha512').toString('hex');
  user ={hash: key, login:allData.login};
  return user;
} 

public.post('/reg', async (ctx) => {
  ctx.response.body = 'Thank you for registration!';
  data.push(getPasswordHash(ctx.request.body));
  const usersJson = JSON.stringify(data);
  fs.writeFile("users.json", usersJson, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
});


public.post('/login', async (ctx) => {
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
  ctx.body = 'You are authorized';
 }
 else {
   ctx.body = 'Your login/password is wrong, try again.';
 }
});

const slogansCollection = JSON.parse(fs.readFileSync('slogans.json'));
privat.post('/slogans', async (ctx)  => {
  const phrase = ctx.request.body;
  const generatedSlogan = await axios.post('https://models.dobro.ai/gpt2/medium/', {
    prompt: JSON.stringify(phrase),
    length: 5,
    num_samples: 1,
  }, {
    headers: { 'User-Agent': 'insomnia/2020.3.3' },
  });

  ctx.body = { 
    data: generatedSlogan.data.replies,
  };

  slogansCollection.slogans.push({phrase, replies: generatedSlogan.data.replies});

  fs.writeFile("slogans.json", JSON.stringify(slogansCollection, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }
  console.log("The file was saved!");
  });
});


app
  .use(public.routes())
  .use(public.allowedMethods())
  .use(privat.routes())
  .use(privat.allowedMethods());

app.listen(3000);