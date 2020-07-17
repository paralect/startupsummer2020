const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const PORT = 8080;
const HASH = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';


const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const password = req.headers.password;
    const key = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');
    (HASH === key) ? res.write('TRUE') :  res.write('FALSE');
  }
  if (req.url === '/home') {
    fs.readFile(`${__dirname}/home.html`, (err, content) => {
      if (!err) {
        res.setHeader('Content-Type', 'text/html');
        res.write(content);
      } else {
        res.statusCode = 500;
        res.write('An error has ocurred');
      }
      res.end();
    })
  } else if (req.url === `/dirname`) {
    console.log(__dirname);
  } else if (req.url === `/filename`) {
    console.log(__filename);
    console.log(path.resolve('index.js'))
  } else if (req.url === '/cpus') {
    console.log(os.cpus());
  } else if (req.url === '/number_of_cores') {
    console.log(os.cpus().length);
  } else if (req.url === '/number_of_cores') {
    console.log(os.cpus().length);
  } else {
    res.end();
  }
})

const data = JSON.stringify({password: 'supper-secure-password'});


server.listen(PORT);