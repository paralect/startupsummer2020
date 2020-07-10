const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.elements = null;
  }

  addPrintlist(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.elements = node;
    } else if (this.elements.next) {
      let nextElement = this.elements.next;
      while (nextElement.next) {
        nextElement = nextElement.next;
      }
      nextElement.next = node;
    } else {
      this.elements.next = node;
    }
    this.head = node;
    this.length += 1;
  }

  getIndexOf(value) {
    let current = this.elements;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  removeFrom(index) {
    if (index > 0 && index > this.length) return -1;

    let curr;
    let prev;
    let it = 0;
    curr = this.elements;
    prev = curr;
    if (index === 0) {
      this.elements = curr.next;
    } else {
      while (it < index) {
        it += 1;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.length -= 1;
    return curr.value;
  }

  ifLoopExists() {
    let fastPtr = this.elements;
    let slowPtr = this.elements;

    while (fastPtr != null && fastPtr.next != null) {
      fastPtr = fastPtr.next.next;
      slowPtr = slowPtr.next;

      if (slowPtr === fastPtr) {
        return true;
      }
    }
    return false;
  }

  makelist() {
    this.head.next = this.elements;
  }
}

const list = new LinkedList();
list.addPrintlist(33);
list.addPrintlist(5);
list.addPrintlist(7);
list.addPrintlist(8);
list.addPrintlist(9);
list.makelist();

console.log(list.getIndexOf(5));
console.log(list.getIndexOf(9));
console.log(`Removed element: ${list.removeFrom(3)}`);
// console.log(`Loop existed ${list.ifLoopExists()}`)
