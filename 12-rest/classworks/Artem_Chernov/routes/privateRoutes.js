const Router = require('koa-router');
const app = new Router();

const resourseController = require('../controllers/resourse.controller')

app.post('/article', resourseController.createArticle);
app.post('/tagline', resourseController.createTagline);
app.post('/interview', resourseController.createInterview);

module.exports = app.routes();
