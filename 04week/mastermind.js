'use strict';
require('colors');
const assert = require('assert');
const readline = require('readline');
const colors = require('colors');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numberOftrys = 10
let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  const solutionArray = solution.split('');
  //should be ['a', 'b', 'c', 'd']
  
  const guessArray = guess.split('');
  //if guess was 'abdc'
  //should be ['a', 'b', 'd', 'c']

  let redPegs = 0;
  let whitePegs = 0;

    for (let i = 0; i < solutionArray.length; i++) {
      if (solutionArray[i] === guessArray[i]) {
        redPegs++;
        solutionArray[i] = null;
      }
    }

    // checking for WhitePegs
    for (let i = 0; i < guessArray.length; i++)
    {
        const guessItem = guessArray[i]
        const targetIndex = solutionArray.indexOf(guessItem);

        if (targetIndex > -1) {
          whitePegs++;
          solutionArray[targetIndex] = null;
        }
    }
      let redPegsString = `${redPegs}`.red
      let whitePegsString = `${whitePegs}`.green
    //return a string representation of redPegs and whitePegs variables
      return `${redPegsString}-${whitePegsString}`;
      // return redPegs + '-' + whitePegs;  
}

function mastermind(guess) {
  
  //solution = 'abcd'; // Comment this out to generate a random solution
  
  if (solution === guess) {
    console.log('You guessed it!')
  } else if (board.length >= numberOftrys) {
    console.log('You ran out of turns!')
  } else {
    console.log('Guess again!')
  }

  let hint = generateHint(guess)
  let boardItem = `${guess}-${hint}`;
  board.push(boardItem)

  return solution === guess || board.length > numberOftrys

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
   
    
    if (mastermind(guess)) {
      console.log(solution)
    } else {
      //answer was incorrect
      
      printBoard()
      getPrompt()
    }
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), true);
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
