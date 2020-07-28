const checkUser = require("./checkUser");

function signin(ctx, jwt) {
  const formData = ctx.request.body;
    console.log('qwer');
    if (checkUser(formData, true)) {
      token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      const session = ctx.session;
      session.token = token;
      const link = "http://localhost:3000/posts";
      ctx.body = `<html><head></head><body><h1>Hello, ${formData.name}</h1><br><p>your token: ${token}</p><a href="${link}">posts</a></body></html>`;
      return { name: formData.name, ok: true }
    }
    return { name: formData.name, ok: false }
}

module.exports = signin;