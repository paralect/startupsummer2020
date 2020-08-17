const http = require('http');
const os = require('os');
const fs = require('fs');
const crypto = require('crypto');

const key = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';

const port = 3000;

const initGetRoutes = (req, res) => {
  switch (req.url) {
    case '/dir_name':
      console.log(__dirname);
      res.end('received GET request.');
      break;
    case '/file_name':
      console.log(__dirname + '/home.html');
      res.end('received GET request.');
      break;
    case '/cpus':
      console.log(os.cpus());
      res.end('received GET request.');
      break;
    case '/number_of_cores':
      console.log(os.cpus().length);
      res.end('received GET request.');
      break;
    case '/home':
      fs.readFile(`${__dirname}/home.html`, (err, content) => {
        if (!err) {
          res.setHeader('Content-Type', 'text/html');
          res.write(content);
        } else {
          res.statusCode = 500;
          res.write('An error has ocurred');
        }
        res.end();
      });
      break;
  }
};

const initPostRoutes = (req, res) => {
  console.log("POST ", req.url);
  switch (req.url) {
    case '/post-request':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString());
        const newKey = crypto.pbkdf2Sync(body.password, 'salt', 100000, 64, 'sha512').toString('hex');
        if (key === newKey) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(JSON.stringify({ isValid: true }));
          res.end();
        } else {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.write(JSON.stringify({ isValid: false }));
          res.end();
        }
      });  break;
  }
};

const routes = {
  get: initGetRoutes,
  post: initPostRoutes,
};

const requestHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      routes.get(req, res);
      break;
    case 'POST':
      routes.post(req, res);
      break;
  }
};

const server = http.createServer(requestHandler);

server.listen(port);
