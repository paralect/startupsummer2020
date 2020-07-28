const readJSON = require('./readJSON');
const saveJSON = require('./saveJSON');

function addArticle(user, article) {
  const base = readJSON('base.json');
  let res;
  base.users.forEach(userData => {
    if (userData.name === user.name) {
      if (!userData.articles) userData.articles = [article];
      else {
        const newArticles = [...userData.articles, article];
        userData.articles = newArticles;
      }
      saveJSON('base.json', base);
      res = userData.articles;
    }
  });
  return res;
}

module.exports = addArticle;