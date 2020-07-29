const http = require('http');
const os = require('os');
const fs = require('fs');
const qs = require('querystring');
const crypto = require('crypto');
const rightHash = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330';

http
  .createServer((req, res) => {

    if(req.method === "GET") {

      switch (req.url) {
        case '/home.html':
          fs.readFile('./home.html', (err, data) => {
            if (err) throw err;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
          });
        case '/dir_name':
          res.write(`${__dirname}`);
          res.end();
        case '/file_name':
          res.write(`${__filename}`);
          res.end();
        case '/cpus':
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify(os.cpus()));
          res.end();
        case '/number_of_cores':
          res.write(`${os.cpus().length}`);
          res.end();
      }

    } else if (req.method === "POST") {

      let requestBody = '';
      let error;

      req.on('data', function(data) {

        requestBody = requestBody.concat(data);
        if (requestBody.length > 1e7) {
          error = true;
          res.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
          fs.readFile('./error413.html', (err, data) => {
            res.write(data);
            res.end();
          });
        }

      });

      req.on('end', function() {
        if (error) return;
        const formData = qs.parse(requestBody);
        const key = crypto.pbkdf2Sync(formData.password, 'salt', 100000, 64, 'sha512');
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(JSON.stringify({ isValid: key.toString('hex') === rightHash }));
        res.end();

      });

    }

  })
  .listen(3000);
