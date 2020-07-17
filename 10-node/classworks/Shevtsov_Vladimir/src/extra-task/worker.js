const nthPrime = require('./utils.js');
const { workerData, parentPort } = require('worker_threads');

const getPrimes = () => {
  const res = nthPrime(workerData.n);
  parentPort.postMessage(res);
}

getPrimes();
