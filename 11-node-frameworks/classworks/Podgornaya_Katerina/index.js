const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const joi = require('joi');
let session = require('koa-generic-session');

const app = new Koa();
const router = new Router();
app.keys = ['some-secret-key-one', 'some-secret-key-two'];
const data = [];

const schema = joi.object({
    lastname: joi.string().required(),
    description: joi.string().min(3).required(),
});

const get = (context) => {
    session = context.session;
    session.count = session.count || 0;
    session.count += 1;
    context.body = session.count;
};

const remove = (context) => {
    context.session = null;
    context.body = 0;
};

const regenerate = async (context) => {
    get(context);
    await context.regenerateSession();
    get(context);
};

router
    .get('/get', (context, next) => {
        get(context);
    })
    .get('/remove', (context, next) => {
        remove(context);
    })
    .get('/regenerate', async (context, next) => {
        await regenerate(context);
    })
    .post('/data', async (context, next) => {
        data.push(context.request.body);
        console.log(data);
        const { value, error } = schema.validate(context.request.body, { allowUnknown: true, abortEarly: false });
        if (error) {
            context.body = `Some error happend!\n${error}`;
        } else context.body = `Your data were got!`;
    });

app
    .use(session())
    .use(bodyParser())
    .use(serve((`${__dirname}/static`)))
    .use(router.routes())
    .use((ctx) => ctx.body = '1')
//.use(router.allowedMethods())

app.listen(3000);
