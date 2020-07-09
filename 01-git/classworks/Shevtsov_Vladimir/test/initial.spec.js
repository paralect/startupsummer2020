const assert = require('assert');
const initial = require('../src/initial');

function test() {
  const testData = [5, 4, 3, 2, 1];

  assert.deepStrictEqual(initial(testData), [5, 4, 3, 2]);
  assert.deepStrictEqual(initial([]), []);

  console.log('initial function tests passed!');
}

test();
