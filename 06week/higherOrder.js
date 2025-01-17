'use strict';
const assert = require('assert');

function map(arr, callback) {
  // Your code here
  return arr.map((num) => {
    return callback(num)
  });
}

function filter(arr, callback) {
  // Your code here
  return arr.filter((num) => {
    return callback(num)
  });
}

function reduce(arr, callback, initialValue) {
  // Your code here
 
    if (initialValue) {
      return arr.reduce((accumulator, currentValue) => {
        return callback(accumulator, currentValue)
      }, initialValue);
    } else {
      return arr.reduce((accumulator, currentValue) => {
        return callback(accumulator, currentValue)
      });
    }
}

// function some(arr, callback) {
//   // Your code here
// }

// function every(arr, callback) {
//   // Your code here
// }

if (typeof describe === 'function') {

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
  
  describe('#reduce()', () => {
    it('should return a total of all the numbers in an array', () => {
      const reduced = reduce([1, 2, 3], (accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      // const reduced = [1, 2, 3].reduce((accumulator, currentValue) => {
      //   return accumulator + currentValue;
      // });
      assert.deepEqual(reduced, 6);
    });

    it('should return a total of all the numbers in an array starting from 10', () => {
      const reduced = reduce([1, 2, 3], (accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 10);
      // const reduced = [1, 2, 3].reduce((accumulator, currentValue) => {
      //   return accumulator + currentValue;
      // });
      assert.deepEqual(reduced, 16);
    });
  });
  

  // describe('#some()', () => {
  //   let count = 0;
  //   const somed = some([1, 2, 3, 4], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return true if at least one item passes the predicate test', () => {
  //     assert.equal(somed, true);
  //   });
  //   it('should stop at the first item that passes the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  //   it('should return false if no items pass the predicate test', () => {
  //     const somed = some([1, 3, 5], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(somed, false);
  //   });
  // });

  // describe('#every()', () => {
  //   it('should return true if at all passes the predicate test', () => {
  //     const everied = every([2, 4, 6], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(everied, true);
  //   });
  //   let count = 0;
  //   const everied = every([2, 3, 4, 5], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return false if any item fails the predicate test', () => {
  //     assert.equal(everied, false);
  //   });
  //   it('should stop at the first item that fails the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  // });

} else {

  console.log('Only run the tests on this one!')

}