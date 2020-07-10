const { execSync } = require('child_process');

const downloadSync = (url, dest) => execSync(`curl ${url} --output ${dest}`);

const getVideoFileDurationSeconds = (fileName) => {
  const params = `-v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${fileName}`;
  return execSync(`ffprobe ${params}`);
};

const createRandomScreenshot = (fileName) => {
  const fileDuration = getVideoFileDurationSeconds(fileName);
  const ssTime = Math.random() * fileDuration;
  const ffmpegParams = `-ss ${ssTime} -i ${fileName} -frames:v 1 -q:v 2 ${fileName}_second_${ssTime}_screenshot.jpg`;
  execSync(`ffmpeg ${ffmpegParams}`);
};

const run = () => {
  downloadSync(
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    './movie_sync.mp4',
  );

  createRandomScreenshot('movie_sync.mp4');
};

run();
