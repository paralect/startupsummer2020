const checkUser = require("./checkUser");

function signin(ctx, jwt) {
  const formData = ctx.request.body;
    if (checkUser(formData, true)) {
      ctx.status = 200;
      const link = "http://localhost:3000/posts";
      const page = `<html><head></head><body><h1>Hello, ${formData.name}</h1><br><a href="${link}">posts</a></body></html>`;
      jwt.sign({foo: 'bar'}, 'shared-secret');
      ctx.body = page;
      return { name: formData.name, ok: true }
    }
    return { name: formData.name, ok: false }
}

module.exports = signin;