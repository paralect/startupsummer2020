const detectLoop = (linkedList) => {
  console.log(linkedList);
  let hare = linkedList.head;
  let tortoise = linkedList.head;
  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      return true;
    }
  }
  return false;
};

module.exports = detectLoop;
