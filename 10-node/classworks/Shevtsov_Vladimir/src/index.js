const http = require('http');
const path = require('path');
const os = require('os');
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
        info = path.resolve(__dirname, __filename);
        break;
      case '/cpus':
        info = JSON.stringify(os.cpus(), 2);
        break;
      case '/number_of_cores':
        info = `${os.cpus().length}`;
        break;
    }
    res.write(info);
    console.log(info);
    res.end();
  }
  if (req.method === 'POST') {
    let isValid = false;
    let body = '';
    const validPasswordHash = hashFunction('supper-secure-password');
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      const { password } = data;
      isValid = validPasswordHash === hashFunction(password);

      res.write(JSON.stringify({ isValid }))
      res.end();
    });
  }
});

server.listen(7777);
