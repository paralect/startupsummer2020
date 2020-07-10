const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');
const Ffmpeg = require('ffmpeg');

async function downloadVideo(urlVideo, name = 'file') {
  const url = urlVideo;
  const path = Path.resolve(__dirname, 'videos', `${name}.mp4`);
  const writer = Fs.createWriteStream(path);
  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  console.log(response.data);
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

const extractFrame = (start = '00:07:00', name) => {
  try {
    const process = new Ffmpeg(Path.resolve(__dirname, 'videos', `${name}.mp4`));
    process.then((video) => {
      video.fnExtractFrameToJPG(Path.resolve(__dirname, 'images'), {
        start_time: start,
        number: 1,
        file_name: 'my_file_%s',
      }, (error, files) => {
        if (!error) {
          console.log(`Frames: ${files}`);
        }
      });
    }, (err) => {
      console.log(`Error: ${err}`);
    });
  } catch (e) {
    console.log(e.code);
    console.log(e.msg);
  }
};

downloadVideo('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', 'name1');
extractFrame('00:01:05', 'code');
