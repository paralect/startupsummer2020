import Node from './node';

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  addToTheEnd(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.firstNode = newNode;
    } else {
      let current = this.firstNode;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  print() {
    console.log('Length', this.length);
    if (this.isEmpty()) {
      console.log('Empty');
    } else {
      let current = this.firstNode;
      console.log(current);
      while (current.next) {
        current = current.next;
        console.log(current);
      }
    }
  }

  isLoop() {
    const hash = [this.firstNode];
    let current = this.firstNode;
    while (current.next) {
      if (hash.includes(current.next)) return true;

      hash.push(current.next);
      current = current.next;
    }
    return false;
  }

  addLastNodeToMakeLoop(value) {
    const newNode = new Node(value);
    newNode.next = this.firstNode;

    let current = this.firstNode;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const linkedList = new LinkedList();

linkedList.addToTheEnd(1);
linkedList.addToTheEnd(2);
linkedList.addToTheEnd(3);
linkedList.addLastNodeToMakeLoop(4);
console.log('Is loop?', linkedList.isLoop());
