const fs = require('fs');
const axios = require('axios').default;

async function download(url, fileName) {
  const params = {
    method: 'get',
    url,
    responseType: 'stream',
  };
  const response = await axios(params);
  const stream = fs.createWriteStream(`./${fileName}`);
  response.data.pipe(stream);
  return new Promise((resolve) => {
    stream.on('finish', () => {
      resolve('solved');
    });
  });
}

module.exports = download;
