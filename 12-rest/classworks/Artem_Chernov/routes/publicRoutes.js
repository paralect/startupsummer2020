const Router = require('koa-router');
const app = new Router();
const userController = require('../controllers/user.controller');
const resourseController = require('../controllers/resourse.controller')

app.post('/user/sign-up', userController.register);
app.post('/user/sign-in', userController.login);
app.get('/article/:id?', resourseController.getArticles);
app.get('/tagline/:id?', resourseController.getTagline);
app.get('/interview/:id?', resourseController.getInterview);

module.exports = app.routes();
