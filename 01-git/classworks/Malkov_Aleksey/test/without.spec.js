const assert = require('assert');
const without = require('../src/without');

function test() {
  const array = [1, 2, 3, 4];

  // success
  assert.deepStrictEqual(without(array, 1), [2, 3, 4]);
  assert.deepStrictEqual(without(array, 1, 2, 3, 4), []);
  // no values
  assert.deepStrictEqual(without(array), array);
  // empty array or null
  assert.deepStrictEqual(without([], 1, 2, 3), []);
  assert.deepStrictEqual(without(null, 1, 2, 3), []);

  console.log('Success!');
}

test();