const Node = require('./singleNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  this.length += 1;
  return this.head;
};
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  this.length += 1;
  return this.head;
};
LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter += 1;
    node = node.next;
  }
  return null;
};
LinkedList.prototype.deleteAt = function (index) {
  if (index === 0) {
    this.head = this.head.next;
    return null;
  }
  const previous = this.getAt(index - 1);

  if (!previous || !previous.next) {
    return null;
  }
  previous.next = previous.next.next;
  this.length -= 1;
  return this.head;
};

function isLooped(list) {
  let count = 0;
  let node = list.getAt(0);
  while (node.next != null) {
    count += 1;
    if (count > list.length) {
      return true;
    }
    node = node.next;
  }
  return false;
}

const list = new LinkedList();
list.insertAtBeginning('a');
list.insertAtEnd('b');
list.insertAtEnd('c');
list.insertAtEnd('d');
list.insertAtEnd('e');
list.insertAtEnd('f');
// list.deleteAt(5);
list.getAt(5).next = list.getAt(0);
// console.log(list.length);
console.log(isLooped(list));
