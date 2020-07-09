const assert = require('assert');
const LinkedList = require('../src/LinkedList');
const detectLoop = require('../src/detectLinkedListLoop');

function test() {
  const loopList = new LinkedList('data1');
  loopList
    .append('data2')
    .append('data3');
  loopList.append(loopList);

  const list = new LinkedList('item1');

  assert.deepStrictEqual(detectLoop(loopList), 3);
  assert.deepStrictEqual(detectLoop(list), 0);

  console.log('detect loop tests passed!');
}

test();
