const http = require('http');
const fs = require('fs');
const os = require('os');
const querystring = require('querystring');
const crypto = require('crypto');

const getHash = (string) => crypto.pbkdf2Sync(string, 'salt', 100000, 64, 'sha512').toString('hex');

const rightHash = getHash('supper-secure-password');

const getHomePage = (response) => {
  fs.readFile('home.html', (error, content) => {
    if (!error) {
      response.setHeader('Content-Type', 'text/html');
      response.write(content);
    }
    response.end();
  });
};

const getRequest = (request, response) => {
  switch (request.url) {
    case '/home':
      getHomePage(response);
      break;
    case '/dir_name':
      console.log(__dirname);
      getHomePage(response);
      break;
    case '/file_name':
      console.log(__filename);
      getHomePage(response);
      break;
    case '/cpus':
      console.log(os.cpus());
      getHomePage(response);
      break;
    case '/number_of_cores':
      console.log(os.cpus().length);
      getHomePage(response);
      break;
    default:
      response.statusCode = 404;
      response.end();
      break;
  }
};

const postRequest = (request, response) => {
  switch (request.url) {
    case '/password':
      let body = '';
      request.on('data', (data) => {
        console.log(data);
        body += data;
      });
      request.on('end', () => {
        console.log(body);
        console.log(querystring.parse(body));
        const bodyHash = getHash(querystring.parse(body).password);
        console.log(`${bodyHash}\n\n\n\n${rightHash}`);
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({ isValid: bodyHash === rightHash }));
        response.end();
      });
      break;
    default:
      break;
  }
};

const server = http.createServer((request, response) => {
  switch (request.method) {
    case 'GET':
      getRequest(request, response);
      break;
    case 'POST':
      postRequest(request, response);
      break;
    default:
      break;
  }
});

server.listen(8080);
