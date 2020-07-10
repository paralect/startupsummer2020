const fs = require('fs');
const Ffmpeg = require('ffmpeg-fork');
const randomSecond = require('./randomSecond');
const download = require('./download');

const urls = {
  url1: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  url2: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
};

async function getFrameOnRandomTime(url, name) {
  const fileName = name || url.split('/').slice(-1)[0];
  const load = await download(url, fileName);
  await load;
  if (!fs.existsSync(`./${fileName}`)) {
    return;
  }
  try {
    const videoFile = new Ffmpeg(fileName);
    videoFile.then((video) => {
      video.fnExtractFrameToJPG('./dump', {
        start_time: randomSecond(video),
        number: 1,
        file_name: 'kek.jpg',
      }, (error, files) => {
        if (!error) console.log(`Frames: ${files}`);
      });
    }, (err) => {
      console.log(`Error: ${err}`);
    });
  } catch (e) {
    console.log(e);
  }
}

getFrameOnRandomTime(urls.url2);
