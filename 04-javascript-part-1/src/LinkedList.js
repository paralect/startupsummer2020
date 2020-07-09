class LinkedList {
  constructor(data) {
    this.head = this;
    this.tail = null;
    this.data = data;
  }

  add(data) {
    const node = new LinkedList(data);

    if (this.tail !== null) {
      this.tail.add(node);
    } else {
      this.tail = node;
    }
    return this;
  }

  remove(node) {
    while (this.next() !== null) {
      if (this.next() === node) {
        this.tail = node.tail;
      }
    }

    return this;
  }

  next() {
    if (this.tail !== null) {
      return this.tail.head;
    }
    return null;
  }

  map(func) {
    this.data = func(this.data);
    const next = this.next();
    if (next !== null) {
      next.map(func);
    }
    return this;
  }
}

module.exports = LinkedList;
