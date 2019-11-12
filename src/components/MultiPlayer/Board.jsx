import React, {Component} from 'react';

const Square = ({ onClick, value }) => {
    return (
      <button onClick={onClick} className={`square ${value === 'X'? 'x-text': value === 'O' ? 'o-text': ''}`}> {value} </button> 
    );
}

class Board extends Component {
    renderSquare(i) {
      return (
        <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

export default Board;