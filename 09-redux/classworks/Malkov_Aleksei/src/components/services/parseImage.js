function parseImage(src) {
  const newSrc = src.split('?')[0];
  return newSrc;
}

export default parseImage;