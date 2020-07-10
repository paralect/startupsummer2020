const canvas = document.getElementById('canvas');
const video = document.getElementById('video');
const input = document.querySelector('.input');

const capture = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  canvas.toBlob = (blob) => {
    const img = new Image();
    img.src = window.URL.createObjectUrl(blob);
  };
};

const insert = () => {
  video.src = input.value;
};

const random = () => {
  video.currentTime = (Math.random() * video.duration);
};

document.querySelector('.capture').addEventListener('click', capture);
document.querySelector('.insert').addEventListener('click', insert);
document.querySelector('.random').addEventListener('click', random);
