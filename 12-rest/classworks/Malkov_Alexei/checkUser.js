const readJSON = require('./readJSON');
const crypto = require('crypto');

function checkUser(user, withPassword=false) {
  const base = readJSON('base.json');
  base.users.forEach(userData => {
    if (userData.name === user.name) {
      const key = crypto.pbkdf2Sync(user.password, 'salt', 100000, 64, 'sha512');
      if (!withPassword) isExist = true;
      else if (userData.password === key.toString('hex')) {
        return true;
      }
    }
  });
  return false;
}

module.exports = checkUser;