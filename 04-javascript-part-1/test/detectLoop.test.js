const assert = require('assert');
const LinkedList = require('../src/LinkedList');
const detectLoop = require('../src/detectLoop');

function test() {
  const loopList = new LinkedList('data1', 'data2', 'data3');
  loopList.append(loopList);
  const list = new LinkedList('item1');
  assert.equal(detectLoop(loopList), true);
  assert.equal(detectLoop(list), false);

  console.log('detect loop list tests passed!');
}

test();
