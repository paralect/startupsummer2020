const fs = require('fs');
const axios = require('axios');
const extractFrames = require('ffmpeg-extract-frames');

const frame = Math.floor((Math.random() * 15) * 1000);

function getVideo() {
  axios({
    method: 'GET',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    responseType: 'stream',
  })
    .then((response) => {
      response.data.pipe(fs.createWriteStream('video.mp4'));
    })
    .catch((err) => { console.log(err); });
}

extractFrames({
  input: 'video.mp4',
  output: './screenshot.jpg',
  offsets: [
    frame,
  ],
});

module.exports = getVideo;
