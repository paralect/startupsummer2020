const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertToStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this.head;
  }

  insertToEnd(data) {
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
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) break;
      counter += 1;
      node = node.next;
    }
    return counter === index ? node : null;
  }

  print() {
    if (this.isLoopExist()) return;
    let index = 0;
    let node = this.head;
    console.log(index, node.data);
    do {
      index += 1;
      console.log(index, node.next.data);
      node = node.next;
    } while (node.next !== null);
  }

  length() {
    return this.length;
  }

  isLoopExist() {
    const arrayOfLinks = [];
    let currentLink = this.head;
    while (currentLink) {
      if (arrayOfLinks.includes(currentLink)) return true;
      arrayOfLinks.push(currentLink);
      currentLink = currentLink.next;
    }
    return false;
  }
}

module.exports = LinkedList;
