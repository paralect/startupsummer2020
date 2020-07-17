const http = require('http');
const url = require('url');

const { Worker, parentPort } = require('worker_threads');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.end();
  } else {
    const query = url.parse(req.url, true).query;
    const { n } = query;
    const worker = new Worker('./worker.js', { workerData: n });
    worker.on('message', (msg) => {
      res.write(JSON.stringify(msg));
      res.end();
      worker.terminate();
    });
  }
});

server.listen(7777);
