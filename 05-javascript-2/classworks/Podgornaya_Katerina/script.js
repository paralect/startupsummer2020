let http = require('http');
let fs = require('fs');
let child_process = require('child_process');

function getRandomVideoSeconds(duration = 15) {
    return Math.round(Math.random() * duration);
}

function getVideoDuration() {
    const process = child_process.spawn('./ffprobe', [
        '-v',
        'quiet',
        '-print_format',
        'compact=print_section=0:nokey=1:escape=csv',
        '-show_entries',
        'format=duration',
        'video.mp4'
    ]);
    return (new Promise(res => {
        process.stdout.on('data', (buffer) => {
            res(Number(buffer.toString('utf8')));
        });
    }));
}

function downloadVideo() {
    const ws = fs.createWriteStream("video.mp4");
    return (new Promise(res => {
        ws.on('drain', () => { res(); });
        http.get("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", response => {
            response.pipe(ws);
        });
    }));
}

function unlinkAsync(path) {
    return (new Promise(res => {
        fs.unlink(path, () => {
            res();
        });
    }));
}

async function saveFrame() {
    const file = child_process.spawn('./ffmpeg', [
        '-ss',
        `${getRandomVideoSeconds(await getVideoDuration())}`,
        '-i',
        'video.mp4',
        '-frames:',
        '1',
        'test.jpg'
    ]);
    file.stderr.on('data', (buffer) => console.log(buffer.toString('utf8')));
};


(async () => {
    await unlinkAsync('video.mp4');
    await unlinkAsync('test.jpg');
    await downloadVideo();
    await saveFrame();
})();