const Item = require('./item.js');

class LinkedList {
  constructor() {
    this.first = null;
    this.length = 0;
  }

  addItem(data) {
    const newItem = new Item(data);
    if (!this.first) {
      this.first = newItem;
      return newItem;
    }
    let last = this.first;
    while (last.next !== null) {
      last = last.next;
    }
    last.next = newItem;
    this.length += 1;
    return this.first;
  }

  printList() {
    let last = this.first;
    console.log(last.data);
    while (last.next !== null) {
      last = last.next;
      console.log(last.data);
    }
  }

  removeLast() {
    if (!this.first) {
      console.log('the list is empty');
      return null;
    }
    let last = this.first;
    let prev = null;
    while (last.next !== null) {
      prev = last;
      last = last.next;
    }

    prev.next = null;
    this.length -= 1;

    return null;
  }

  isLoop() {
    if (!this.first) {
      console.log('the list is empty');
      return null;
    }

    let current = this.first;
    const hash = [];

    while (current.next !== null) {
      if (hash.includes(current.next)) {
        return true;
      }
      hash.push(current);
      current = current.next;
    }

    return false;
  }

  addLastItemForLoop(value) {
    const newItem = new Item(value);
    newItem.next = this.first;
    let current = this.first;
    while (current.next) {
      current = current.next;
    }
    current.next = newItem;
  }

  isEmpty() {
    return !this.first;
  }
}

const list = new LinkedList();

console.log(list.isEmpty());

list.addItem(1);
list.addItem(2);
list.addItem(3);
list.addItem(4);
list.addItem(5);
list.printList();

console.log(list.isLoop());

list.addLastItemForLoop(6);

console.log(list.isLoop());
