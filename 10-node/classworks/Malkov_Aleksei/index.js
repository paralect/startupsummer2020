const http = require('http');
const os = require('os');
const fs = require('fs');
const qs = require('querystring');
const crypto = require('crypto');
const rightHash = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';

http
  .createServer((req, res) => {
    if(req.method === "GET") {
      if (req.url === '/home.html') {
        fs.readFile('./home.html', (err, data) => {
          if (err) throw err;
          res.setHeader("Content-Type", "text/html");
          res.write(data);
          res.end();
        });
      } else if (req.url === '/dir_name') {
        res.write(`${__dirname}`);
        res.end();
      } else if (req.url === '/file_name') {
        res.write(`${__filename}`);
        res.end();
      } else if (req.url === '/cpus') {
        res.setHeader("Content-Type", "application/json");
        const cpus = JSON.stringify(os.cpus());
        res.write(cpus);
        res.end();
      } else if (req.url === '/number_of_cores') {
        const cpus = os.cpus();
        res.write(`${cpus.length}`);
        res.end();
      }
    } else if (req.method === "POST") {
      var requestBody = '';
      req.on('data', function(data) {
        requestBody += data;
        if(requestBody.length > 1e7) {
          res.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
          res.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
        }
      });
      req.on('end', function() {
        var formData = qs.parse(requestBody);
        const key = crypto.pbkdf2Sync(formData.password, 'salt', 100000, 64, 'sha512');
        
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        if (key.toString('hex') === rightHash) {
          res.write(JSON.stringify({ isValid: true }));
          res.end();
        } else {
          res.write(JSON.stringify({ isValid: false }));
          res.end();
        }
      });
    }
    
  })
  .listen(3000);

