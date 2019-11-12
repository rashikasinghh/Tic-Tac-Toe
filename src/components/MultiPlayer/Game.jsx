import React, { Component } from 'react'
import Board from './Board';

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default class Game extends Component {
  state = {
      history: [{
          squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
  };

  initialState = this.state;
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? this.props.typeSelection : this.props.typeSelection === 'X'? 'O': 'X';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  resetGame = () => {
    this.setState(this.initialState)
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
  
    let status = winner ? `Winner: ${winner}` : `Next player: ${(xIsNext ? this.props.typeSelection : this.props.typeSelection === 'X'? 'O': 'X')}`;
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div className="info">{status}</div>
            <button className="btn btn-white" onClick={this.resetGame}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}
