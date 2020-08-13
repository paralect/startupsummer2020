const http = require('http');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

crypto.DEFAULT_ENCODING = 'hex';

const getRequest = {
  '/home': function(res) {
    fs.readFile(`${__dirname}/home.html`, (err, content) => {
      if(!err) {
        res.setHeader('Content-Type', 'text/html');
        res.write(content);
      } else {
        res.statusCode = 500;
        res.write('An error has ocurred');
      }

      res.end();
    });
  },
  '/dir_name': function() {
    console.log('Your project directory:', __dirname);
  },
  '/file_name': function() {
    console.log('Current performing file:', __filename);
  },
  '/cpus': function() {
    console.log('CPUs:', os.cpus());
  },
  '/number_of_cores': function() {
    console.log('Number of cores:', os.cpus().length);
  }
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let requestData = '';
    let isValid = false;
    req.on('error', (err) => {
      console.log(err);
    }).on('data', (chunk) => {
      requestData += chunk.toString();
    }).on('end', () => {
      requestData = JSON.parse(requestData);
      const password = crypto.pbkdf2Sync(requestData.password, 'salt', 100000, 64, 'sha512');
      const hash = crypto.pbkdf2Sync('supper-secure-password', 'salt', 100000, 64, 'sha512');
      if (password === hash) {
        isValid = true;
      }

      res.write(JSON.stringify({ isValid }));
      res.end();
    })
  } else if (req.method === 'GET' && req.url !== '/favicon.ico') {
    getRequest[req.url](res);
  }
})

server.listen(8080);
