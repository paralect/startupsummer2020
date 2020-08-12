const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
const crypto = require('crypto');

const hashFunction = (password) => crypto
  .pbkdf2Sync(password, 'salt', 100000, 64, 'sha512')
  .toString('hex');

const server = http.createServer((req, res) => {
  const { url } = req;
  if (req.method === 'GET') {
    let info = '';
    switch (url) {
      case '/dir_name':
        info = path.resolve(__dirname);
        break;
      case '/file_name':
        info = path.resolve(__filename);
        break;
      case '/cpus':
        info = JSON.stringify(os.cpus(), 2);
        break;
      case '/number_of_cores':
        info = `${os.cpus().length}`;
        break;
    }
    if (req.url === '/home.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(path.resolve(__dirname, 'home.html')).pipe(res);
    } else {
      res.write(info);
      console.log(info);
      res.end();
    }
  }
  if (req.method === 'POST') {
    let isValid = false;
    const chunks = [];
    const validPasswordHash = hashFunction('supper-secure-password');

    req.on('data', (chunk) => {
      chunks.push(chunk);
    });
    
    req.on('end', () => {
      const data = JSON.parse(chunks.join(''));
      const { password } = data;
      isValid = validPasswordHash === hashFunction(password);

      res.write(JSON.stringify({ isValid }))
      res.end();
    });
  }
});

server.listen(7777);
