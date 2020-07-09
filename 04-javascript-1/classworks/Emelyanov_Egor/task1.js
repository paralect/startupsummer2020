function Node(data, prev = null) {
  this.data = data;
  this.prev = prev;
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newElement = new Node(data, this.tail);
    this.tail = newElement;
    this.length += 1;
  }
}

module.exports = LinkedList;
