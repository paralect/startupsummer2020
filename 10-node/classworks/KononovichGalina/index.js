const http = require('http');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');


const server = http.createServer((req, res) => {

  const getHomePage = (res) => {
    console.log('GET');
    fs.readFile(`${__dirname}/home.html`, (err, content) => {
      if(!err) {
          res.setHeader('Content-Type', 'text/html');
          res.write(content);
          res.end();
      } 
  })}

  const initGetRoutes = (req, res) => {
    switch (req.url) {
      case '/home': 
      getHomePage(res);
      break;
      case '/dir_name': 
      console.log(__dirname);
      break;
      case '/file_name': 
      console.log(__dirname+ '/home.html');
      break;
      case '/cpus': 
      console.log(os.cpus());
      break;
      case '/number_of_cores': 
      console.log(os.cpus().length);
      break;
    }
  }

  const initPostRoutes = (req, res) => {
    const key = crypto.pbkdf2Sync(req.headers.password , 'salt', 100000, 64, 'sha512').toString('hex') ;
    const hash = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';
    key === hash? res.write(JSON.stringify({ isValid: true })) : res.write(JSON.stringify({ isValid: false }));
    res.end();
  }
 
  const routes = {
    get: initGetRoutes(req, res),
    post: initPostRoutes(req, res),
  }

  switch(req.method) {
    case 'GET': routes.get;
    case 'POST': routes.post;
}
});

server.listen(8080);
