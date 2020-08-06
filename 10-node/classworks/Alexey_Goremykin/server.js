const http = require('http');
const os = require('os');
const fs = require('fs');
const crypto = require('crypto');

const { routes, titles } = require('./routes');

const salt = 'salt';
const iterations = 100000;
const keyLength = 64;
const digest = 'sha512';
const securePassword = 'supper-secure-password';

const handleHashRequest = (request, response) => {
  let body = '';
  request.on('data', chunk => {
      body += chunk.toString();
  });
  request.on('end', () => {
      const { password } = JSON.parse(body);

      const hash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest);
      const securePasswordHash = crypto.pbkdf2Sync(securePassword, salt, iterations, keyLength, digest);

      if (hash.equals(securePasswordHash)) {
        console.log('isValid: true');
      } else {
        console.log('isValid: false');
      }

      response.end('ok');
  });
};

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, GET');

  const title = titles[request.url];
  response.write(`<h2>${title === undefined ? 'Not found' : title}</h2>`);

  switch (request.url) {
    case routes.directoryName:
      response.write(__dirname);
      break;
    case routes.fileName:
      response.write(__filename);
      break;
    case routes.cpus:
      console.log(os.cpus());
      break;
    case routes.coresNumber:
      console.log(os.cpus().length);
      break;
    case routes.home:
      response.end(fs.readFileSync('home.html'));
      break;
    case routes.hash:
      handleHashRequest(request, response);
      break;
  }

  response.end();
});

server.listen(3000);
