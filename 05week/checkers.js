'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB);
    } else if (color === 'black') {
      this.symbol = String.fromCharCode(0x125CF);
    }
  }

  isWhite() {
    if(this.symbol === String.fromCharCode(0x125CB)) {
      return true
    } else {
      return false
    }
  }
}

class Board {
  constructor() {
    this.grid = []
    this.checkers = [];
  }

  //returns the checker object for the specific row & column
  selectChecker(row, column) {
    return this.grid[row][column]

  }

  moveChecker(start, end) {
    let startRow = parseInt(start[0])
    let startColumn = parseInt(start[1])
    let checker = this.selectChecker(startRow, startColumn)

    let endRow = parseInt(end[0])
    let endColumn = parseInt(end[1])
    this.grid[endRow][endColumn] = checker;
    this.grid[startRow][startColumn] = null;

    
    if (this.isKillMove(startRow, startColumn, endRow, endColumn)) {
      let position = this.getKillPosition(startRow, startColumn, endRow, endColumn)
      this.killChecker(position)
    }
  
  }
  getKillPosition(startRow, startColumn, endRow, endColumn) {
    let rowPosition = Math.max(startRow, endRow) - 1;
    let columnPosition = Math.max(startColumn, endColumn) - 1;
    return [rowPosition, columnPosition]
  }

  isKillMove(startRow, startColumn, endRow, endColumn) {
    let rowDiff = Math.abs(startRow - endRow)
    let colDiff = Math.abs(startColumn - endColumn)
      return rowDiff == 2 && colDiff == 2

  }


  //position - the kill position - [4,1]
  killChecker(position) {
    let checker = this.selectChecker(position[0], position[1])
    this.grid[position[0]][position[1]] = null;
    let checkerIndex = this.checkers.indexOf(checker)
    this.checkers.splice(checkerIndex, 1)
    console.log(position)
  }

  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
    this.grid[2][3]
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          let checker = this.grid[row][column]
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(checker.symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  createCheckers() {
    const whitePosition = [
    [0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]]

    const blackPosition = [
    [5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]]

    for(let i = 0; i <= 11; i ++) {
      const row = whitePosition[i][0]
      const column = whitePosition[i][1]
      let checker = new Checker('white');
      this.grid[row][column] = checker;
      this.checkers.push(checker)
    }
    for(let i = 0; i <= 11; i ++) {
      const row = blackPosition[i][0]
      const column = blackPosition[i][1]
      let checker = new Checker('black');
      this.grid[row][column] = checker;
      this.checkers.push(checker)
    }
  }
  }


class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  moveChecker(start, end) {
    this.board.moveChecker(start, end)
  }
    
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(game.board.grid[5][0])
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(!game.board.grid[5][0])
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
