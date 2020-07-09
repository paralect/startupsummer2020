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

  detectloop() {
    if (!this.length) return false;
    let i = 0;
    let currentElem = this.head;
    while (currentElem !== null && i <= this.length) {
      currentElem = currentElem.next;
      i += 1;
    }
    return i <= this.length;
  }

  detectloopAlt() {
    if (!this.length) return false;
    let currentElem = this.head;
    const arr = [];
    for (let i = 0; i < this.length; i += 1) {
      if (arr.includes(currentElem)) return true;
      arr.push(currentElem);
      currentElem = currentElem.next;
    }
    return false;
  }
}

module.exports = LinkedList;
