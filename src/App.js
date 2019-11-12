import React, {Component} from 'react';
import './App.css';
import UserSelection from './components/UserSelection';
import TictacSelection from './components/TictacSelection';
import Game from './components/MultiPlayer/Game';
import SinglePlayer from './components/SinglePlayer/SinglePlayer';

class App extends Component {
  state = {
    playMode: null,
    typeSelection: null
  }

  render () {
    return (
      <div className="App">
       {this.state.playMode === null ?
        <UserSelection playMode={(value) => this.setState({playMode: value})}/> 
        :<div>
          {this.state.playMode !== null && this.state.typeSelection === null ? 
          <TictacSelection typeSelection={(value) => this.setState({typeSelection: value})}/> 
          : null }
          </div>
        }

        {this.state.playMode === 'withAI' && this.state.typeSelection !== null ? <SinglePlayer typeSelection={this.state.typeSelection}/>
        : <div> 
        {this.state.playMode === 'withFriend' && this.state.typeSelection !== null ? <Game typeSelection={this.state.typeSelection}/> 
        : null }
        </div> 
        }
      </div>
    );
  }
}

export default App;