const assert = require('assert');
const sortedUniq = require('../src/sortedUniq');

function test() {
    assert.deepEqual(sortedUniq([null, 1, null, undefined, undefined, 7, "slovoSPB", "slovoSPB"]), [null, 1, undefined, 7, "slovoSPB"]);
    assert.deepEqual(sortedUniq(1,1,2,3,54,7), [1,2,3,54, 7]);

    assert.deepEqual(sortedUniq([null, 1, null, [1, 1], [1,1], 7, 'awdaw', 'awdaw']), [null, 1, [1, 1], [1,1], 7, "awdaw", ]);
    assert.deepEqual(sortedUniq({"arg":1 ,"arg1": 2}, null), [{"arg":1 ,"arg1": 2}, null]);

    console.log('Success!');
}

test();
