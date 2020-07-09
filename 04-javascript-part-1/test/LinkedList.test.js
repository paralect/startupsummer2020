const assert = require('assert');
const LinkedList = require('../src/LinkedList');

function test() {
  const list = new LinkedList('item1');
  list
    .add('item2')
    .add('item3')
    .add('item4')
    .add('item5')
    .add('item6');
  const expectedHeadData = 'item1';
  const expectedTailHeadData = 'item2';

  assert.equal(list.head.data, expectedHeadData);
  assert.equal(list.tail.head.data, expectedTailHeadData);

  assert.equal(list.map(() => 'data').head.data, 'data');

  console.log('Linked List tests passed!');
}

test();
