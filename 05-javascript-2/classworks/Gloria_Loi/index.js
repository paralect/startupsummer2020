const fs = require('fs');
const axios = require('axios');
const Ffmpeg = require('ffmpeg');

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
const videoPath = `${__dirname}/media/code3.mp4`;

const downloadVideo = async (url) => {
  const writer = fs.createWriteStream(videoPath);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  response.data.pipe(writer);
};

const cutVideo = () => {
  const process = new Ffmpeg(videoPath);
  process.then((video) => {
    video.fnExtractFrameToJPG('./media', {
      frame_rate: 1,
      number: 1,
      file_name: 'img.jpg',
    }, (err) => {
      if (!err) console.log('extracted');
    });
  }, (err) => {
    console.log(`error: ${err}`);
  });
};

downloadVideo(videoUrl).then(cutVideo);
