import LinkedListNode from './linkedListNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addItem(value) {
    const newItem = new LinkedListNode(value, this.next, this.prev);

    if (!this.head || !this.tail) {
      this.head = newItem;
      this.tail = newItem;

      return this;
    }

    this.tail.next = newItem;
    const temp = this.tail;
    this.tail = newItem;
    this.tail.next = this.head;
    this.tail.prev = temp;
    this.length += 1;

    return this;
  }

  searchClouses() {
    let counter = 0;
    while (this.tail.next !== null) {
      counter += 1;
      this.tail = this.tail.next;

      if (this.length < counter) {
        return true;
      }
    }
    return false;
  }
}

module.exports = LinkedList;
