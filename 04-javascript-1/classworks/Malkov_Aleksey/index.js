const LinkedList = require('./LinkedList');

const check = () => {
  const xxx = new LinkedList();
  xxx.insertToStart('hihi');
  xxx.insertToStart('hehe');
  xxx.insertToEnd('bibip');
  xxx.insertToEnd('bibbop');
  xxx.insertToEnd('b');
  xxx.isLoopExist(); // false
  xxx.print();
  // make loop
  xxx.getAt(2).next = xxx.head;
  xxx.isLoopExist(); // true
};

check();
