const fs = require('fs');
const readJSON = require('./readJSON');
const saveJSON = require('./saveJSON');
const checkUser = require('./checkUser');
const crypto = require('crypto');

function signup(formData) {
  let response;
  const key = crypto.pbkdf2Sync(formData.password, 'salt', 100000, 64, 'sha512');
  const newUser = {...formData, password: key.toString('hex') };
  const base = readJSON('base.json');
  if (!checkUser(newUser)) {
    base.users.push(newUser);
    if (base) saveJSON('base.json', base);
    response = { message: 'User created', ok: true };
  } else response = { message: 'User already exist', ok: false };
  return response;
}

module.exports = signup;