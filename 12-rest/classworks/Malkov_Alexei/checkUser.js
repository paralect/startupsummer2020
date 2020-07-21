const readJSON = require('./readJSON');

function checkUser(user) {
  const base = readJSON('base.json');
  let isExist = false;
  base.users.forEach(userData => {
    if (userData.password === user.password && userData.name === user.name) isExist = true;
  });
  return isExist;
}

module.exports = checkUser;