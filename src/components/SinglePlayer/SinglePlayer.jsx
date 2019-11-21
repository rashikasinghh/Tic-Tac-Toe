import React, {Component} from 'react';


class SinglePlayer extends Component{
    state = {
      fields: [[0,0,0],
              [0,0,0],
              [0,0,0]], 
      info: ''
    }
    

    checkMove = (rowNum, colNum, info) => {
        const {fields} = this.state
        var blankFields = [];
        var score = [0,0,0,0];
        if(fields[rowNum][colNum] === 0) {
          fields[rowNum][colNum] = 1;
          for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if(fields[i][j] === 0) blankFields.push([i,j]);
            }
            score[0] += fields[rowNum][i];
            score[1] += fields[i][colNum];
            if(rowNum === colNum) score[2] += fields[i][i];
            if(rowNum + colNum  === 2) score[3] += fields[i][2-i];
          }
          if(score.indexOf(3) !== -1) {
            return {fields: fields, info: "You Won"};
          }
        } else {
          return {fields: fields, info: ""};
        }
        
        if(blankFields.length>0){
          let randomIndex = Math.floor(Math.random() * blankFields.length);
          let chosenRow = parseInt(blankFields[randomIndex][0]);
          let chosenCol = blankFields[randomIndex][1];
          fields[chosenRow][chosenCol] = -1;
          score = [0,0,0,0];
          for(let i = 0; i < 3; i++) {
            score[0] += fields[chosenRow][i];
            score[1] += fields[i][chosenCol];
            if(chosenRow === chosenCol) score[2] += fields[i][i];
            if(chosenRow + chosenCol  === 2) score[3] += fields[i][2-i];
          }
          if(score.indexOf(-3) !== -1) {
            return {fields: fields, info: "You Lost"};
          }
        // if there are no empy fields, end the game
        } else {
          info = "Game Over";
        }
        return {fields: fields, info: info};
      }

    onFieldClicked = (e) => {
        let rowNum = +e.target.id[0];
        let colNum = +e.target.id[1];
        let retVal = this.checkMove(rowNum, colNum, this.state.info);
        this.setState({fields: retVal.fields, info: retVal.info});
    };
    resetGame = () => {
        this.setState({fields:[[0,0,0],[0,0,0],[0,0,0]],info: ''});
    }
  render() {
      let fields = [];
      this.state.fields.forEach((row, i) => {
          let rowNum = i;
          row.forEach((val, i) => {
            let colNum = i;
            let id = rowNum.toString() + colNum.toString();
            if(val === 0) val = "";
            else if(val === 1) val = this.props.typeSelection;
            else val = this.props.typeSelection === 'X' ? 'O': 'X';
            fields.push(<Field key={id} id={id} onClick={this.onFieldClicked}>{val}</Field>);
          });
      });
    return (
      <section>
        <div className="board">{fields}</div>
        <div className="info">{this.state.info}</div>
        <br></br>
        <button className="btn btn-white" onClick={this.resetGame}>Reset Game</button>
      </section>
    );
  }
}

class Field extends Component {
  render(){
    const {id, onClick, children} = this.props;
    return (
      <div role="button" id={id} onClick={onClick} className={`field ${children === 'X'? 'x-text': children === 'O' ? 'o-text': ''}`}>{children}</div>
    )
  }
};


export default SinglePlayer;
