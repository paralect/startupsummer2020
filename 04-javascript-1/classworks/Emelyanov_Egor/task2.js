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
    const newElement = new Node(data);

    if (this.length) {
      let currentNode = this.tail;
      while (currentNode.prev !== null) {
        currentNode = currentNode.prev;
      }
      currentNode.prev = newElement;
      this.length += 1;
    } else {
      this.tail = newElement;
      this.length += 1;
    }

    return this.tail;
  }

  detectloop() {
    let i = 0;
    let currentElem = this.tail;
    while (currentElem !== null && i <= this.length) {
      currentElem = currentElem.prev;
      i += 1;
    }
    return i > this.length;
  }

  detectloopAlt() {
    let currentElem = this.tail;
    const arr = [];
    for (let i = 0; i < this.length; i += 1) {
      if (arr.includes(currentElem.prev)) return true;
      arr.push(currentElem);
      currentElem = currentElem.prev;
    }
    return false;
  }

  addLastNodeToMakeLoop(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    let current = this.tail;
    while (current.prev) {
      current = current.prev;
    }
    current.prev = newNode;
    this.length += 1;
  }
}

// Example 1
const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
console.log(list1.detectloopAlt());

// Example 2
const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.addLastNodeToMakeLoop(4);
console.log(list2.detectloopAlt());

// Example 3
const list3 = new LinkedList();
list3.append(1);
list3.append(2);
list3.append(3);
console.log(list3.detectloop());

// Example 4
const list4 = new LinkedList();
list4.append(1);
list4.append(2);
list4.append(3);
console.log(list2.detectloop());

module.exports = LinkedList;
