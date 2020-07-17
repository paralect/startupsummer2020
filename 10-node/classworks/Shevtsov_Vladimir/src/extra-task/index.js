const http = require('http');
const url = require('url');
const nthPrime = require('./utils.js');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end();
  } else {
    const query = url.parse(req.url, true).query;
    const { n } = query;
    const primes = nthPrime(parseInt(n, 10));
    console.log(n);
    res.write(JSON.stringify(primes));
    res.end();
  }
});

server.listen(7777);