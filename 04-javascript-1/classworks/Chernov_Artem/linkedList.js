const detectLoop = require('./detectloop');
const Node = require('./NodeList');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addItem(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.length = 1;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length += 1;
    }
    return this.addItem.bind(this);
  }

  makeCycledList() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = this.head;
  }

  insertByPosition(position, value) {
    if (position < 0 || position > this.length) {
      return 'invalid position';
    }
    const node = new Node(value);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev;
      for (let i = 0; i < position - 1; i += 1) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
    this.length += 1;
    return this.insertByPosition.bind(this);
  }

  removeByPosition(position) {
    if (position < 0 || position > this.length) {
      return 'invalid position';
    }
    let current = this.head;
    if (position === 0) {
      this.head = null;
      this.head = current.next;
    } else {
      let prev = null;
      for (let i = 0; i < position - 1; i += 1) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      current = null;
    }
    this.length -= 1;
    return this.removeByPosition.bind(this);
  }

  getIndexOfValue(value) {
    let current = this.head;
    let i = 1;
    while (current.next) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i += 1;
    }
    return 'nothing was found';
  }
}

const linkedList = new LinkedList();
linkedList.addItem(1)(2)(3)(4)(5);
linkedList.makeCycledList();

console.log(detectLoop(linkedList));
