const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  insertAtEnd(data) {
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

  loopExist() {
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
