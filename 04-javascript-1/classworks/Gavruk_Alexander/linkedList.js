const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addNode(data) {
    const nodeToAdd = new Node(data);

    if (this.length) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = nodeToAdd;
      this.length += 1;
    } else {
      this.head = nodeToAdd;
      this.length += 1;
    }

    return this.head;
  }

  detectLoopUsingLength() {
    if (this.length === 0) {
      return false;
    }

    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      counter += 1;
      if (counter > this.length) {
        return true;
      }
    }

    return false;
  }

  detectLoopUsingAddresses() {
    if (this.length === 0) {
      return false;
    }

    const checkedNodes = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      checkedNodes.push(currentNode);
      currentNode = currentNode.next;
      if (checkedNodes.indexOf(currentNode) !== -1) {
        return true;
      }
    }

    return false;
  }

  head() {
    if (this.head) {
      return this.head.data;
    }
    return null;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  clear() {
    this.head = null;
    this.length = 0;

    return this;
  }
}

module.exports = LinkedList;
