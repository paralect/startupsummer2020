const assert = require('assert');
const LinkedList = require('../src/LinkedList');
const detectLoop = require('../src/detectLinkedListLoop');

function test() {
  const loopList = new LinkedList('data1');
  loopList
    .append('data2')
    .append('data3');
  loopList.append(loopList);

  assert.deepStrictEqual(detectLoop(loopList), 3);

  console.log('detect loop tests passed!');
}

test();
