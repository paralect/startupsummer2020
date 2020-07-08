function getTopThreeElements(arr) {
    return arr.sort((a, b) => a - b).filter((item, index) => index > arr.length - 4).reverse();
  }

module.exports = getTopThreeElements;
