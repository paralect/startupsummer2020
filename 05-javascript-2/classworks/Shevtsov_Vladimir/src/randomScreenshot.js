const http = require('http');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);

  http.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => file.close(cb));
  });
};

const getVideoFileDurationSeconds = async (fileName) => {
  const params = `-v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${fileName}`;
  const { stdout } = await exec(`ffprobe ${params}`);
  return stdout;
};

const getRandomFrameFFMPEG = async (fileName) => {
  const fileDuration = await getVideoFileDurationSeconds(fileName);
  const ssTime = Math.random() * fileDuration;
  const ffmpegParams = `-ss ${ssTime} -i ${fileName} -frames:v 1 -q:v 2 ${fileName}_second_${ssTime}_screenshot.jpg`;
  await exec(`ffmpeg ${ffmpegParams}`);
};

const res = download(
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  './movie.mp4',
  () => {
    getRandomFrameFFMPEG('movie.mp4');
  },
);
console.log(res);
