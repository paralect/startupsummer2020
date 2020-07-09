const LinkedList = require('./LinkedList');

const check = () => {
  const xxx = new LinkedList();
  xxx.insertToStart('hihi');
  xxx.insertToStart('hehe');
  xxx.insertToEnd('bibip');
  xxx.insertToEnd('bibbop');
  xxx.insertToEnd('b');
  console.log(xxx.isLoopExist());
  // make loop
  // xxx.getAt(2).next = xxx.head;
  console.log(xxx.isLoopExist());
  xxx.print();
};

check();
