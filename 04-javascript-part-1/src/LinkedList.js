class LinkedList {
  constructor(data) {
    this.head = this;
    this.tail = null;
    this.data = data;
  }

  add(data) {
    let node = data;
    if (!(data instanceof LinkedList)) {
      node = new LinkedList(data);
    }

    if (this.tail !== null) {
      this.tail.add(node);
    } else {
      this.tail = node;
    }
    return this;
  }

  remove(index) {
    if (index === 0) {
      return this.tail;
    }

    if (index >= this.size()) {
      return this;
    }

    let current = this;
    for (let i = 0; i < index - 1; i += 1) {
      current = current.next();
    }
    current.tail = current.next().tail;
    return this;
  }

  get(index) {
    if (index === 0 || index >= this.size()) {
      return this;
    }
    let current = this;
    for (let i = 0; i < index; i += 1) {
      current = current.next();
    }
    return current;
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

  size() {
    if (this.tail === null) {
      return 1;
    }

    return 1 + this.tail.size();
  }
}

module.exports = LinkedList;
