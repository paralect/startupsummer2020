const fs = require('fs');
const axios = require('axios');
const extractFrames = require('ffmpeg-extract-frames');

async function downloadVideo() {
  axios({
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    method: 'GET',
    responseType: 'arraybuffer',
  }).then((response) => {
    fs.writeFileSync('videoff.mp4', response.data, (err) => console.log(err));
  });
}
downloadVideo();

async function breakIntoFrames() {
  await extractFrames({
    input: 'videoff.mp4',
    output: './screenshot-%i.jpg',
    offsets: [
      Math.random() * 10000,
    ],
  });
}
breakIntoFrames();
