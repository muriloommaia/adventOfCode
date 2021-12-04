const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\r?\n/);
// these are the numbers that will be sorted
const numbers = input[0].split(',').map(Number);
// A class constructor of an object that will be used to put each board
class Board {
  constructor(unicBoard) {
    this.board = unicBoard;
    this.cols = [5, 5, 5, 5, 5];
    this.rows = [5, 5, 5, 5, 5];
    this.complete = false;
  }
  // this function will set the number in the board
  setNumber(number) {
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        if (this.board[i][j] === number) {
          this.rows[i] -= 1;
          this.cols[j] -= 1;
          this.board[i][j] = 0;
          this.checkComplete();
          return
        }
      }
    }
  }
  // this function will check if the board is complete
  checkComplete() {
    for (let i = 0; i < 5; i += 1) {
      if (!this.cols[i] || !this.rows[i]) {
        this.complete = true;
      }
    }
  }
  // this function will calculate all points
  calculatePoints() {
    let points = 0;
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        if (this.board[i][j] > 0) {
          points += this.board[i][j];
        }
      }
    }
    return points;
  }
}
// these are the boards to play
const boards = [];
let unicBoard = []
for (let i = 2; i < input.length; i++) {
  const line = input[i];
  if (!line) {
    boards.push(new Board(unicBoard));
    unicBoard = [];
    continue;
  }
  let parsed = line.split(' ').map(l => parseInt(l))
  unicBoard.push(parsed.filter(p => !isNaN(p)));
}

function bingo() {
  for (let i of numbers) {
    for (let board of boards) {
      board.setNumber(i);
      if (board.complete) {
        let points = board.calculatePoints() * i;
        console.log(" W I N E R ")
        console.log(points);
        console.log(board.calculatePoints());
        return 'finished';
      }
    }
  }
}

console.log(bingo());
