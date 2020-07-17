const http = require('http');
const fs = require('fs');
const os = require('os');
const request = require('request');
const { Console } = require('console');
const crypto = require('crypto');


const server = http.createServer((req, res) => {

  if(req.method === 'POST') {
    const key = crypto.pbkdf2Sync(req.headers.password , 'salt', 100000, 64, 'sha512').toString('hex') ;
    if(key === '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330'){
      res.write(JSON.stringify({ isValid: true }));
    }
    else {
      res.write(JSON.stringify({ isValid: false }));
    }
    console.log(key);
  }
  
  switch (req.url) {
    case '/dir_name': console.log(__dirname);
    case '/file_name': console.log(__dirname+ '/home.html');
    case '/cpus': console.log(os.cpus());
    case '/number_of_cores': console.log(os.cpus().length);
  }

  if(req.url === '/home') {
    if(req.method === 'GET') {
      console.log('GET');
    fs.readFile(`${__dirname}/home.html`, (err, content) => {
        if(!err) {
            res.setHeader('Content-Type', 'text/html');
            res.write(content);
            res.end();
        } 
    })}
  }
});

server.listen(8080);
