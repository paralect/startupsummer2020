const assert = require('assert');
const head = require('../src/head');

function test() {
  
  // success
  assert.equal(head([1, 2, 3, 4]), 1);
  assert.equal(head(['lol', 'kek']), 'lol');

  // bad arguments
  assert.equal(head([]), undefined);
  assert.equal(head(null), undefined);
  assert.equal(head('pffff'), undefined);
  assert.equal(head(126), undefined);

  console.log('Success!');
}

test();