const fs = require('fs');
const axios = require('axios');
// const childProcess = require('child_process');

const extractFrame = require('ffmpeg-extract-frames');

function getData() {
  const data = axios({
    method: 'get',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    responseType: 'stream',
  })
    .then((response) => {
      response.data.pipe(fs.createWriteStream('video.mp4'));
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
}

getData();
const randomNum = (Math.random() * 15000).toFixed();

extractFrame({
  input: './video.mp4',
  output: './test3.jpg',
  offsets: [randomNum],
});

// childProcess.spawn('ffmpeg -i video.mp4 -ss 00:00:24 -vframes 1 screen2.jpg');
