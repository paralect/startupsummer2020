const ListNode = require('./listNode');

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const listNode = new ListNode(value);
    if (!this.head) {
      this.head = listNode;
      this.tail = listNode;
      return this.head;
    }

    const last = this.tail;
    last.next = listNode;

    this.tail = listNode;
    return listNode;
  }

  deleteNode(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    if (this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    return deleteNode;
  }

  isLoop() {
    const arr = [this.head];
    let current = this.head;
    let res = false;
    while (current.next) {
      if (arr.includes(current.next)) {
        res = true;
      } else {
        arr.push(current.next);
        current = current.next;
      }
    }
    return res;
  }

  addLastNode(value) {
    const listNode = new ListNode(value);
    listNode.next = this.head;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = listNode;
  }
}

const list = new List();

list.addNode(5);
list.addNode(3);
list.addNode(11);

list.deleteNode(5);
list.addLastNode(6);

list.isLoop();
