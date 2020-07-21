const fs = require('fs');
const readJSON = require('./readJSON');
const saveJSON = require('./saveJSON');

function signin(formData) {
  const newUser = {...formData};
  const base = readJSON('base.json');
  base.users.push(newUser);
  if (base) saveJSON('base.json', base);
}
/*const key = crypto.pbkdf2Sync(formData.password, 'salt', 100000, 64, 'sha512');
    console.log(key);*/
module.exports = signin;