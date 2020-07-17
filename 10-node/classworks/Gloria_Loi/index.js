const http = require('http');
const fs = require('fs');
const os = require('os');
const qs = require('query-string');
const crypto = require('crypto');

const HASH = '37e753db1079f7d8ff8d145769664df46b12d8c3a3c4930a2e66ab76a8bfb4ca9e0fe69b7bc40355755846342cf19c95c58fa538d964963f04aff409621ec330'

const server = http.createServer((req, res) => {
  if(req.method === "GET"){
    switch(req.url) {
      case '/home': {
        fs.readFile(`${__dirname}/home.html`, (err, content) => {
          if(!err) {
            res.setHeader('Content-Type', 'text/html');
            res.write(content);
            res.end();
          } else {
            res.statusCode = 500;
            res.write('An error has ocurred');
            res.end();
          }
        })
      }; 
        break;
      case '/file_name': { 
        res.setHeader('Content-Type', 'text/html');
        res.write(`/home/${__dirname}/${__filename}`);
        res.end();
      }; 
        break;
      case '/dir_name':{ 
        res.write(`/home/${__dirname}`);
        res.end();
      }; 
        break;
      case '/cpus':{
        res.write(`${os.cpus()}`);
        res.end();}; 
        break;
      case '/number_of_cores':{ 
        res.write(`${os.cpus().length}`);
        res.end();}; 
        break;
      default: {      
        res.write('Cannot handle this request');
        res.end();
      }
    }
  }
  if(req.method === "POST"){
    let body = ''
    req.on('data', data => {
      body+=data;
    })
    req.on('end', () => {
      const key = crypto.pbkdf2Sync(qs.parse(body).password, 'salt', 100000, 64, 'sha512').toString('hex');
        res.write(`${ key === HASH }`);
        res.end();
    })

  }
})

server.listen(8000, console.log("server started in localhost:8000"));