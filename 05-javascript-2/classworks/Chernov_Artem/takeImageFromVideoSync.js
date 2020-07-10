const { execSync } = require('child_process');
const Path = require('path');

execSync(`curl http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4 --output ${Path.resolve(__dirname, 'videos', 'sync.mp4')}`);
execSync(`ffmpeg -ss ${Math.random() * 60 * 20} -i ${Path.resolve(__dirname, 'videos', 'sync.mp4')} ${Path.resolve(__dirname, 'images', 'sync.jpg')}`);
