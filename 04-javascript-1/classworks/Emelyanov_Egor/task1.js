function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const newElement = new Node(data, this.head);
    this.head = newElement;
    this.length += 1;
  }
}

module.exports = LinkedList;
