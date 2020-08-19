const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  register: async (ctx) => {
    console.log("DAWDAWDAW")
    let { email, password } = ctx.request.body
    let user = new User({
      "email": email,
      "password": password,
    })
    try{
      let doc = await user.save();
      ctx.body = JSON.stringify(doc)
    } catch (e) {
      ctx.status = 500;
      ctx.body = JSON.stringify(e)
    }
  },

  login: async (ctx) => {
    let user = await User.findOne({email: ctx.request.body.email})
    if (!user){
      ctx.status = 500;
      ctx.body = JSON.stringify("User not found")
    } else if(!user.verifyPassword(ctx.request.body.password)) {
      ctx.status = 401;
      ctx.body = JSON.stringify("Invalid password or email")
    } else {
      let jwt = user.generateJwt();
      ctx.set('Authorization', `Bearer ${jwt}`);
      ctx.body = JSON.stringify("YYYYEEEEEE")
    }
  },
}
