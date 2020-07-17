const http = require('http');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

crypto.DEFAULT_ENCODING = 'hex';

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
      fs.readFile(`${__dirname}/home.html`, (err, content) => {
          if(!err) {
            res.setHeader('Content-Type', 'text/html');
            res.write(content);
          } else {
            res.statusCode = 500;
            res.write('An error has ocurred');
          }

          res.end();
      })
  } else if (req.url === '/dir_name' && req.method === 'GET') {
    console.log('Your project directory:', __dirname);
  } else if (req.url === '/file_name' && req.method === 'GET') {
    console.log('Current performing file:', __filename);
  } else if (req.url === '/cpus' && req.method === 'GET') {
    console.log('CPUs:', os.cpus());
  } else if (req.url === '/number_of_cores' && req.method === 'GET') {
    console.log('Number of cores:', os.cpus().length);
  } else if (req.method === 'POST') {
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
  }
})

server.listen(8080);
