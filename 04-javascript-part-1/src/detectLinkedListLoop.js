const detectLoop = (node) => {
  const nodeSet = new Set();
  const loopSet = new Set();

  let curNode = node;
  while (!loopSet.has(curNode)) {
    if (nodeSet.has(curNode)) {
      loopSet.add(curNode);
    } else {
      nodeSet.add(curNode);
    }
    curNode = curNode.next();
  }
  return loopSet.size;
};

module.exports = detectLoop;
