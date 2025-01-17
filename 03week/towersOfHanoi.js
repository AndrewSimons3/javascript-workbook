'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  return stacks[endStack].push(stacks[startStack].pop())

}
function isValid(startStack, endStack) {
  if(startStack === 'a' && (endStack === 'b' || endStack === 'c')) {
    return true
  } else if (startStack === 'b' && (endStack === 'a' || endStack === 'c')) {
    return true
  } else if (startStack === 'c' && (endStack === 'b' || endStack === 'a')) {
    return true
  } else {
    return false
  }
}

function isLegal(startStack, endStack) {
  if(isValid(startStack, endStack)) {
    let start = stacks[startStack][stacks[startStack].length - 1]

    let end = stacks[endStack][stacks[endStack].length - 1]
  
    if(start < end || stacks[endStack].length === 0) {
      return true
    } else {
      return false
    }
  }
  
}

function checkForWin() {
  // Your code here
  if(stacks.c.length === 4) {
    return true
  } else {
    return false
  }
}

function towersOfHanoi(startStack, endStack) {
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
  }
  
  if(checkForWin()) {
   console.log('you win!')
  }
  //towersOfHanoi()
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });

    it('should be able to move a block', () => {  
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3,], b: [1], c: [2] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [],
        c: [1]
      };
      assert.equal(isLegal('a', 'b'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
    });
    it('should detect a win', () => {
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
      // //testing checkForWin for stack C
      // stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      // assert.equal(checkForWin(), true);
      // stacks = { a: [], b: [4, 3, 2], c: [1] };
      // assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
