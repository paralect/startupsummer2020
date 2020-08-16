const http = require('http');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

const hash = crypto.pbkdf2Sync('supper-secure-password', 'salt', 100000, 64, 'sha512').toString('hex');
const checkHash = (obj) => crypto.pbkdf2Sync(obj.password, 'salt', 100000, 64, 'sha512').toString('hex') === hash;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
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
  } else if (req.method === 'GET') {
    switch (req.url) {
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
  
      case '/dir_name':
        console.log(__dirname);
        break;
  
      case '/file_name':
        console.log(__filename);
        break;
  
      case '/cpus':
        console.log(os.cpus());
        break;
  
      case '/number_of_cores':
        console.log(os.cpus().length);
        break;
    
      default:
        break;
    };
  }
});

server.listen(8080);
