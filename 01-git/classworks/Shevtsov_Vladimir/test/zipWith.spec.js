const assert = require('assert');
const zipWithIndex = require('../src/zipWithIndex');

function test() {
  const testArray = ['a', 'b', 'c'];

  // should success
  assert.deepStrictEqual(zipWithIndex(testArray), [['a', 0], ['b', 1], ['c', 2]], "expected: [['a', 0], ['b', 1], ['c', 2]]");

  // should return empty array
  assert.deepStrictEqual(zipWithIndex(null), [], 'should return empty array if argument is null');
  assert.deepStrictEqual(zipWithIndex([]), [], 'if argument is empty array, return it');

  console.log('zipWithIndex spec passed!');
}

test();
