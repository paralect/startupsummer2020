const checkUser = require("./checkUser");
const secret = 'shared-secret';

function signin(ctx, jwt) {
  const formData = ctx.request.body;
    if (checkUser(formData, true)) {
      ctx.status = 200;
      const link = "http://localhost:3000/posts";
      const page = `<html><head></head><body><h1>Hello, ${formData.name}</h1><br><a href="${link}">posts</a></body></html>`;
      const token = jwt.sign({foo: 'bar'}, secret);
      ctx.session.token = token;
      ctx.body = {
        token,
      };
      return { name: formData.name, ok: true }
    }
    return { name: formData.name, ok: false }
}

module.exports = signin;