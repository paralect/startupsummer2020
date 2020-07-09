const assert = require('assert');
const LinkedList = require('../src/LinkedList');

function test() {
  const list = new LinkedList('item1');
  list
    .append('item2')
    .append('item3')
    .append('item4')
    .append('item5')
    .append('item6');
  const expectedHeadData = 'item1';
  const expectedTailHeadData = 'item2';

  assert.equal(list.data, expectedHeadData);
  assert.equal(list.tail.data, expectedTailHeadData);
  assert.equal(list.get(0).data, 'item1');
  assert.equal(list.size(), 6);
  assert.equal(list.remove(0).data, 'item2');
  assert.equal(list.map(() => 'data').data, 'data');

  console.log('Linked List tests passed!');
}

test();
