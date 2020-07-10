window.addEventListener('load', () => {
  console.log('loaded');
  const form = document.querySelector('.form');
  const getButton = document.querySelector('#get_button');
  const inputUrl = document.querySelector('#file_url');
  getButton.addEventListener('click', () => {
    const video = document.createElement('video');
    video.src = inputUrl.value;
    video.preload = 'auto';
    video.controls = true;
    video.addEventListener('loadedmetadata', () => {
      console.log('video meta data loaded');
      video.currentTime = Math.random() * video.duration;
      const ratio = video.videoWidth / video.videoHeight;
      const w = video.videoWidth - 100;
      const h = parseInt(w / ratio, 10);
      const canvas = document.querySelector('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, w, h);
      video.addEventListener('canplay', () => {
        ctx.drawImage(video, 0, 0, w, h);
      });

      // form.append(video);
      form.append(canvas);
    });
  });
});
