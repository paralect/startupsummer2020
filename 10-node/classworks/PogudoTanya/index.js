const http = require('http');
const fs = require('fs').promises;
const cpus = require('cpus');
const crypto = require('crypto');
const queryString = require('query-string');

const KEY = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';
crypto.DEFAULT_ENCODING = 'hex';

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    console.log('POST');
    let body = '';
    request.on('data', (data) => {
      body += data;
      console.log('Partial body: ', queryString.parse(body));
    });

    request.on('end', () => {
      const Ourkey = crypto.pbkdf2Sync(queryString.parse(body).password, 'salt', 100000, 64, 'sha512').toString('hex');
      console.log('THIIIS', crypto.pbkdf2Sync('supper-secure-password', 'salt', 100000, 64, 'sha512').toString('hex'));

      console.log(Ourkey);

      if (Ourkey != KEY) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('isValid: false');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('isValid: true');
      }
    });
  } else {
    console.log('GET');
    console.log(__dirname);
    console.log(__filename);
    console.log(cpus());
    console.log(cpus().length);
    fs.readFile(`${__dirname}/index.html`).then((contents) => {
      response.setHeader('Content-Type', 'text/html');
      response.writeHead(200);
      response.end(contents);
    });
  }
});

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);
