const assert = require('chai').assert
const sort = require('./bubbleSort')

describe('sort functionality', function() {
  context('sort function', function() {
    it('it can sort a list', function() {
      assert.deepEqual(sort([5,4,3,2,1]), [1,2,3,4,5])
    });
  });
});
