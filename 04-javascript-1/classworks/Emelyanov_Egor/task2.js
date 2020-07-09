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
    const newElement = new Node(data);

    if (this.length) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newElement;
    } else {
      this.head = newElement;
    }
    this.length += 1;
    return this.head;
  }

  detectloop() {
    let i = 0;
    let currentElem = this.head;
    while (currentElem !== null && i <= this.length) {
      currentElem = currentElem.next;
      i += 1;
    }
    return i > this.length;
  }

  detectloopAlt() {
    let currentElem = this.head;
    const arr = [];
    for (let i = 0; i < this.length; i += 1) {
      if (arr.includes(currentElem.next)) return true;
      arr.push(currentElem);
      currentElem = currentElem.next;
    }
    return false;
  }

  addLastNodeToMakeLoop(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
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
