/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[]; // Help us design the 9 tiles that make up a simple Tic-Tac-Toe board
  xIsNext: boolean; // Help us figure out which player is going to play next
  winner: string; // Help us display the winner.

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame()
  {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  // This is a TS getter that can help us get the string from the boolean variable
  // that we got to help us know which player is going next.
  // Whenever xIsNext changes so will this computed property changes as well.
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number)
  {
    if (!this.squares[idx])
    {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner()
  {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lines.length; i++)
    {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b]
        && this.squares[a] === this.squares[c])
      {
        return this.squares[a];
      }
    }
    return null;
  }
}
