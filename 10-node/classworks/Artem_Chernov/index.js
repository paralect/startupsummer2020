const http = require('http');
const os = require('os');
const fs = require("fs");
const crypto = require('crypto');


const key = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330'

const port = 3000;

const routes = {
  '/': (response) => {
    fs.readFile(`${__dirname}/home.html`, (err, content) => {
      if (!err) {
        response.setHeader('Content-Type', 'text/html');
        response.write(content);
      } else {
        response.statusCode = 500;
        response.write('An error has ocurred');
      }
      response.end();
    });
  },

  '/dir_name': (request,  response) => {
    console.log(`request ${request.url} |`, __dirname);
    response.end('received GET request.');
  },

  '/file_name': (request,  response) => {
    console.log(`request ${request.url} |`, __filename);
    response.end('received GET request.');
  },

  '/cpus': (request,  response) => {
    console.log(`request ${request.url} |`, os.cpus());
    response.end('received GET request.');
  },

  '/number_of_cores': (request,  response) => {
    console.log(`request ${request.url} |`, os.cpus().length);
    response.end('received GET request.');
  },

  postRequest: (request,  response) => {

    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = JSON.parse(Buffer.concat(body).toString());
      const newKey = crypto.pbkdf2Sync(body.password, 'salt', 100000, 64, 'sha512').toString('hex');
      if(key === newKey){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(JSON.stringify({isValid: true }));
        response.end();
      } else {
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.write(JSON.stringify({isValid: false }));
        response.end();
      }
    });
  }
}


const requestHandler = (request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    routes['/'](response);
  } else if (request.method === 'GET' && request.url === '/dir_name') {
    routes['/dir_name'](request, response)
  } else if (request.method === 'GET' && request.url === '/file_name') {
    routes['/file_name'](request, response)
  } else if (request.method === 'GET' && request.url === '/cpus') {
    routes['/cpus'](request, response)
  } else if (request.method === 'GET' && request.url === '/number_of_cores') {
    routes['/cpus'](request, response)
  } else if (request.method === 'POST') {
    routes.postRequest(request, response)
  } else {
    console.log(`server is listening on ${port}`);
  }
};

const server = http.createServer(requestHandler);

server.listen(3000);