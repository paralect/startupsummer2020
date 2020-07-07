const mapValues = (obj, func) => {
  const object = Object(obj);

  const entries = Object.entries(object);
  const res = entries.reduce((acc, cur) => {
    const [prop, val] = cur;
    return { ...acc, [prop]: func(val) };
  }, {});
  return res;
};

module.exports = mapValues;
