module.exports = function detectLoopInLinkedList(linkedList) {
  let loop = false;
  let currentNode = linkedList.head;

  while (currentNode.next) {
    console.log("i'm in the loop");
    if (currentNode.repeate === true) {
      loop = true;
      console.log('true');
    }
    currentNode.repeate = true;
    currentNode = currentNode.next;
  }
  if (loop === false) {
    console.log('false');
  }
};
