const initial = (xs) => {
  if (!Array.isArray(xs)) return [];

  const length = xs.length;
  let res = [];
  if(length) {
    res = xs.slice(0, length - 1);
  }

  return res;
};

module.exports = initial; 
