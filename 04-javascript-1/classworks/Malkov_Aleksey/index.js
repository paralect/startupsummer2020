const LinkedList = require('./LinkedList');

const xxx = new LinkedList();
xxx.insertAtBeginning('hihi');

console.log(xxx);
xxx.insertAtBeginning('hehe');

console.log(xxx);
xxx.insertAtEnd('END_my_suffer');

console.log(xxx);

xxx.insertAtEnd('END_my_suffer_Again');

console.log(xxx);
console.log(xxx.getAt(0));
console.log(xxx.getAt(1));

console.log(xxx.loopExist());

xxx.insertAtEnd('b');
xxx.getAt(2).next = xxx.head;

console.log(xxx.loopExist());
