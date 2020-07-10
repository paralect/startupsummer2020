const fs = require('fs');
const axios = require('axios');
const extractFrames = require('ffmpeg-extract-frames');
const Ffmpeg = require('ffmpeg');

async function randomSec() {
  const process = new Ffmpeg('videoff.mp4');
  const video = await process;
  return video.metadata.duration.seconds * Math.random();
}
async function breakIntoFrames() {
  await extractFrames({
    input: 'videoff.mp4',
    output: './screenshot-%i.jpg',
    offsets: [
      await randomSec(),
    ],
  });
}

async function downloadVideo() {
  axios({
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    method: 'GET',
    responseType: 'arraybuffer',
  }).then((response) => {
    fs.writeFileSync('videoff.mp4', response.data, (err) => console.log(err));
    breakIntoFrames();
  });
}
downloadVideo();
