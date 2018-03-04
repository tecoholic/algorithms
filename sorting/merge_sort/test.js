var assert = require('assert');

var sort = require('./merge_sort').merge_sort;

describe('Merge Sort', function() {
    it('should return empty array for empty input',function(){
        assert.deepEqual(sort([]), []);
    });

    it('should return the input array for single element array', function(){
        assert.deepEqual(sort([1]), [1]);
    });

    it('should return values sorted with two elements', function(){
        assert.deepEqual(sort([3,2]), [2,3]);
    })

    it('should return sorted array for odd number of elements', function(){
        var arr = [8,3,6];
        var expected = [3,6,8];
        assert.deepEqual(sort(arr), expected);
    });

    it('should return sorted array for even number of elements', function(){
        var arr = [8,3,6,1];
        var expected = [1,3,6,8];
        assert.deepEqual(sort(arr), expected);
    });

    it('should sort array of negative numbers', function(){
        var arr = [-2, -7, -5, -1, -8, -4, -6, -3];
        var expected = [-8, -7, -6, -5, -4, -3, -2, -1];
        assert.deepEqual(sort(arr), expected);

    });
});
