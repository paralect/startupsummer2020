const http = require('http');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

const hash = crypto.pbkdf2Sync('supper-secure-password', 'salt', 100000, 64, 'sha512').toString('hex');
const checkHash = (obj) => crypto.pbkdf2Sync(obj.password, 'salt', 100000, 64, 'sha512').toString('hex') === hash;

const server = http.createServer((req, res) => {
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
    });
  } else if (req.url === '/dir_name' && req.method === 'GET') {
    console.log(__dirname);
  } else if (req.url === '/file_name' && req.method === 'GET') {
    console.log(__filename);
  } else if (req.url === '/cpus' && req.method === 'GET') {
    console.log(os.cpus());
  } else if (req.url === '/number_of_cores' && req.method === 'GET') {
    console.log(os.cpus().length);
  } else if (req.method === 'POST') {
    let data = '';
    let isValid = false;
    req.on('data', (chunk) => {
      data += chunk.toString();
    });
    req.on('end', () => {
      data = JSON.parse(data);
      if (data.password === 'supper-secure-password' && checkHash(data)) isValid = true;
      res.write(JSON.stringify({ isValid }));
      res.end();
    });
  }
});

server.listen(8080);
