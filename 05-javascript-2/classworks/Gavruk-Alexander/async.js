const Fs = require('fs');
const Axios = require('axios');
const Ffmpeg = require('ffmpeg');
const extractFrames = require('ffmpeg-extract-frames');

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
const videoPath = './videos/video.mp4';

async function downloadVideo(url, path) {
  const writeStream = Fs.createWriteStream(path);

  try {
    const response = await Axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });
    response.data.pipe(writeStream);
  } catch (err) {
    // console.log(err);
  }
}

async function makeScreenshot(path, sec) {
  try {
    await extractFrames({
      input: path,
      output: './screenshots/screenshot.jpg',
      offsets: [
        sec,
      ],
    });
  } catch (err) {
    // console.log(err);
  }
}

(async () => {
  const video = await new Ffmpeg(videoPath);
  await downloadVideo(videoUrl, videoPath);
  const sec = Math.floor(Math.random() * video.metadata.duration.seconds);
  await makeScreenshot(videoPath, sec);
})();
