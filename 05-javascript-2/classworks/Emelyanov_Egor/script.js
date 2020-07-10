const fs = require('fs');
const axios = require('axios').default;
const ffmpeg = require('ffmpeg');
const extractFrames = require('ffmpeg-extract-frames');

async function saveVideo(url) {
  axios({
    method: 'get',
    url,
    responseType: 'stream'
  })
    .then((response) => {
      response.data.pipe(fs.createWriteStream('file.mp4'));
    });
}

async function makeScreenshot(path) {
  try {
    const process = new ffmpeg(path);
    process.then(async (video) => {
      const duration = video.metadata.duration.seconds;
      const randomSec = Math.random() * duration;
      await extractFrames({
        input: path,
        output: './screenshot.jpg',
        offsets: [
          randomSec * 1000,
        ],
      });
    }, (err) => {
      console.log(`Error: ${err}`);
    });
  } catch (e) {
    console.log(e.code);
    console.log(e.msg);
  }
}

(async () => {
  await saveVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4');
  await makeScreenshot('file.mp4');
})();
