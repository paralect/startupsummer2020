const http = require('http');
const fs = require('fs');
// const axios = require('axios');
// const ffmpeg = require('ffmpeg');
const childProcess = require('child_process');
// const ffmpegForDuration = require('fluent-ffmpeg');
// const getVideoDurationInSeconds = require('get-video-duration');

// download image
function downloadImage() {
  const file = fs.createWriteStream('image.jpg');
  http.get('http://i.pinimg.com/564x/95/f1/41/95f141ceb741517de18b585914467e79.jpg', (response) => response.pipe(file));
}

// download video
function downloadVideo() {
  const file = fs.createWriteStream('video.mp4');
  http.get('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', (response) => response.pipe(file));
}

function getRandomVideoSeconds(duration = 15) {
  return Math.round(Math.random() * duration);
}

// save frame from video using terminal
function saveFrameTerminal() {
  childProcess.spawn('ffmpeg.exe', ['-ss', `${getRandomVideoSeconds()}`, '-i', 'video.mp4', '-frames:', '1', 'test.jpg']);
  // let file = childProcess.spawn('ffmpeg.exe', ['-i', 'video.mp4', '-r', '0.1', 'frame%d.jpg']);
  // file.stderr.on('data', (buffer) => console.log(buffer.toString('utf8')));
}

function getVideoDuration() {
  // let info = childProcess.spawn("mediainfo", ["--Output='General;%Duration%", "video.mp4"]);
  childProcess.spawn('ffprobe', ['-v', 'quiet', '-print_format', 'compact=print_section=0:nokey=1:escape=csv', '-show_entries', 'format=duration', 'video.mp4']);
}

downloadImage(); // works
downloadVideo(); // works

saveFrameTerminal(); // works
// getRandomVideoSeconds(); // works
getVideoDuration(); // doesn't work
