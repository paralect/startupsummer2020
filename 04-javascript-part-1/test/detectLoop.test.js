const assert = require('assert');
const LinkedList = require('../src/LinkedList');
const detectLoop = require('../src/detectLinkedListLoop');

function test() {
  const loopList = new LinkedList('data1');
  loopList
    .add('data2')
    .add('data3');
  loopList.add(loopList);

  assert.deepStrictEqual(detectLoop(loopList), 3);

  console.log('detect loop tests passed!');
}

test();
