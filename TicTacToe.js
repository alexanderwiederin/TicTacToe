const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

class Game {
  constructor() {
    this.board = [[null, null, null], [null, null, null], [null, null, null]];
    this.turn = 'X';
    this.winner = null;
  }
  placeToken(row, column) {
    this.board[row][column] = this.turn;
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }
  findWinner() {
    for (let i = 0; i < this.board.length; i++) {
      this.board[i].filter((cell) => console.log(cell));
    }
  }
}

const newGame = new Game;

const askQuestion = () => {
  newGame.findWinner();
  console.log(newGame.board);
  rl.question(`Player ${newGame.turn}, where do you want to place your Token? `, (cell) => {
    newGame.placeToken(cell[0], cell[1]);
    askQuestion();
  });
}

askQuestion();
