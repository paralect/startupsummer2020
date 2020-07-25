const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  saltSecret: String
});

User.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

User.methods.verifyPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

User.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id },
    "secret",
    {
      expiresIn: "7200000"
    });
};

mongoose.model("User", User);
