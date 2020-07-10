const fs = require('fs');
const axios = require('axios').default;
const Ffmpeg = require('ffmpeg');

async function saveVideo(url, path) {
  const stream = fs.createWriteStream(path);
  return new Promise((resolve) => {
    axios({
      method: 'get',
      url,
      responseType: 'stream',
    })
      .then((response) => {
        response.data.pipe(stream);
      });
    stream.on('finish', () => {
      resolve('solved');
    });
  });
}

async function makeScreenshot(path) {
  try {
    const process = new Ffmpeg(path);
    process.then(async (video) => {
      const duration = video.metadata.duration.seconds;
      const randomSec = Math.random() * duration;
      video.fnExtractFrameToJPG('./yo', {
        start_time: randomSec,
        number: 1,
        file_name: 'screenshot.jpg',
      }, (error, files) => {
        if (!error) console.log(`Frames: ${files}`);
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
  await saveVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', 'file.mp4');
  await makeScreenshot('file.mp4');
})();
