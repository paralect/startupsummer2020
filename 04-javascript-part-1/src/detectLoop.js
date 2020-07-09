const detectLoop = (node) => {
  const nodes = [];
  let cur = node;
  while (cur.next()) {
    if (nodes.indexOf(cur) !== -1) {
      return true;
    }
    nodes.push(cur);
    cur = cur.next();
  }
  return false;
};

module.exports = detectLoop;
