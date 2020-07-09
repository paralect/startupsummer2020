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
      if (counter === index) {
        return node;
      }
      counter += 1;
      node = node.next;
    }
    return null;
  }

  print() {
    if (this.isLoopExist()) return;
    let index = 0;
    let nd = this.head;
    console.log(index, nd.data);
    do {
      index += 1;
      console.log(index, nd.next.data);
      nd = nd.next;
    } while (nd.next !== null);
  }

  length() {
    return this.length;
  }

  isLoopExist() {
    const arr = [];
    let temp = this.head;
    while (temp) {
      if (arr.includes(temp)) {
        return true;
      }
      arr.push(temp);

      temp = temp.next;
    }
    return false;
  }
}

module.exports = LinkedList;
