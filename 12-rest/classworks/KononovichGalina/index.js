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
const slogansCollection = JSON.parse(fs.readFileSync('slogans.json'));
const topicsCollection = JSON.parse(fs.readFileSync('topics.json'));
const interviewsCollection = JSON.parse(fs.readFileSync('interviews.json'));

function getPasswordHash(allData) {
  const key = crypto.pbkdf2Sync(allData.password, 'salt', 100000, 64, 'sha512').toString('hex');
  user ={hash: key, login:allData.login};
  return user;
} 

public.post('/reg', async (ctx) => {
  ctx.response.body = 'Thank you for registration!';
  data.push(getPasswordHash(ctx.request.body));
  const usersJson = JSON.stringify(data, null, 2,);
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

public.get('/slogans', async (ctx) => {
  ctx.body = {
    data: slogansCollection,
  };
})

public.get('/interviews', async (ctx) => {
  ctx.body = {
    data: interviewsCollection,
  };
})

public.get('/topics', async (ctx) => {
  ctx.body = {
    data: topicsCollection,
  };
})


const responsePorfirevich = async(phrase,length, num_samples) => await axios.post('https://models.dobro.ai/gpt2/medium/', {
    prompt: JSON.stringify(phrase),
    length: length,
    num_samples: num_samples,
  }, {
    headers: { 'User-Agent': 'insomnia/2020.3.3' },
  });


const generate = async (ctx, length, num_samples, collection, doc, field) => {
  
  const phrase = ctx.request.body;
  const interview = [];
  let generatedText;

  if(phrase.questions) {
    for(const question of phrase.questions) {
      generatedText = await responsePorfirevich(phrase, length, num_samples);
      interview.push(question, generatedText.data.replies[0]);
      interviewsCollection.interviews.push(interview);
    }
    console.log(interview);
  } else {
    generatedText = await responsePorfirevich(phrase, length, num_samples);
    collection[field].push({phrase, replies: generatedText.data.replies});
  }
 
  ctx.body = { 
    data: generatedText.data.replies,
  };


  fs.writeFile(doc, JSON.stringify(collection, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }
  console.log("The file was saved!");
  });
}

privat.post('/slogans', async (ctx)  => {
  generate(ctx, 5, 1, slogansCollection, "slogans.json", "slogans");
});

privat.post('/topics', async (ctx) => {
  generate(ctx, 30, 3, topicsCollection, "topics.json", "topics");
})

privat.post('/interviews', async (ctx) => {
  generate(ctx, 10, 1, interviewsCollection, "interviews.json", "interviews");
})

app
  .use(public.routes())
  .use(public.allowedMethods())
  .use(privat.routes())
  .use(privat.allowedMethods());

app.listen(3000);