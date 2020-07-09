const detectLoopInLinkedList = require('./detect_loop');
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addNodeToTheEnd(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(value);
    }

    this.length += 1;
  }

  addNodeIntoPosition(value, position) {
    if (position < 0 || position > this.length) {
      console.log("Sorry, this list doesn't have this position.");
      return;
    }

    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let currentPosition = 0;

      while (currentPosition !== position && currentPosition < this.length) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition += 1;
      }

      previousNode.next = node;
      node.next = currentNode;
    }
    this.length += 1;
  }

  getNodeByPosition(position) {
    if (position < 0 || position > this.length) {
      return "Sorry, this list doesn't have this position.";
    }

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition += 1;
    }
    return currentNode.value;
  }

  doLoop() {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = this.head;
  }
}

// create linked list
const linkedList = new LinkedList();

// add nodes
linkedList.addNodeToTheEnd(1); // 1
linkedList.addNodeToTheEnd(2); // 1 --> 2
linkedList.addNodeToTheEnd(3); // 1 --> 2 --> 3

// add nodes into position
linkedList.addNodeIntoPosition(1.3, 1); // 1 --> 1.3 --> 2 --> 3
linkedList.addNodeIntoPosition(1.6, 2); // 1 --> 1.3 --> 1.6 --> 2 --> 3

// add nodes into position not exists
linkedList.addNodeIntoPosition(1.3, 10); // error
linkedList.addNodeIntoPosition(1.6, 20); // error

// get node by position
console.log(linkedList.getNodeByPosition(2)); // 1.6

// detect if loop in this linked list
detectLoopInLinkedList(linkedList); // false

/* create loop linked list */
linkedList.doLoop();
detectLoopInLinkedList(linkedList); // true

console.log(linkedList);
