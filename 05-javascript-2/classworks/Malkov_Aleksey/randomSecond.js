function randomSecond(video) {
  return Math.floor(Math.random() * video.metadata.duration.seconds);
}

module.exports = randomSecond;
