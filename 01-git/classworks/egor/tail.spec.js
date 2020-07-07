const assert = require('assert');
const tail = require('../src/tailFunc');

function test() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [10, 20, 30, 40, 50];
  const arr3 = [100, 200, 300, 400, 500];
  const arr4 = [];

  // success
  assert.equal(tail(arr1), 5);
  assert.equal(tail(arr2), 50);
  assert.equal(tail(arr3), 500);

  // bad arguments
  assert.equal(tail(arr4), undefined);

}

test();
