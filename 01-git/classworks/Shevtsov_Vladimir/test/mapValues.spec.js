const assert = require('assert');
const mapValues = require('../src/mapValues');

function test() {
  const testData = { first: 1, second: 2 };
  const nullifier = () => 0;

  assert.deepStrictEqual(mapValues(testData, nullifier), { first: 0, second: 0 }, 'prop values should be 0');

  assert.deepStrictEqual(mapValues(null, () => 1), {});

  console.log('mapValues test passed!');
}

test();
