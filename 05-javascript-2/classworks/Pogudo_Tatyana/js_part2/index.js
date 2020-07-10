const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');
const Ffmpeg = require('ffmpeg');

async function downloadImage() {
  const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const path = Path.resolve(__dirname, 'video', 'code.mp4');
  const writer = Fs.createWriteStream(path);

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

function getFragment() {
  try {
    const process = new Ffmpeg('./video/code.mp4');
    process.then((video) => {
      video.fnExtractFrameToJPG('./video', {
        frame_rate: 1,
        number: 15,
        start_time: '00:00:34',
        file_name: 'my_frame.jpg',
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

downloadImage().then(getFragment);
