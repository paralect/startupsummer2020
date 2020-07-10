const fs = require('fs');
const axios = require('axios');
const extractFrames = require('ffmpeg-extract-frames');

const videoPath = '/home/student/WebstormProjects/startupsummer2020/05-javascript-2/classworks/Volodkova_Anna/video/video.mp4';

async function downloadVideo() {
  const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const writer = fs.createWriteStream(videoPath);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);
}

downloadVideo().then(extractFrames({
  input: videoPath,
  output: './screenshot3.jpg',
  offsets: [
    1000],
}));
