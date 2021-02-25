import React from 'react';
import Navbar from './components/Navbar';
import Game from "./components/Game";
import Login from "./components/Login";
import Endgame from "./components/Endgame";
import Footer from './components/Footer';
import { Icon, InlineIcon } from '@iconify/react';
import bxMoon from '@iconify/icons-bx/bx-moon';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ties: 0,
      username1: 'Player1',
      username2: 'Player2',
      winner: '',
      player1: 0,
      player2: 0,
      showLogin: true,
      showEndgame: false,
      isLight: true,
      size: 3,
      font: 'cross',
    };
  }

  handleScore = (player) => {
    const { username1, username2 } = this.state;
    let winner;
    if (player === 'player1') {
      winner = username1;
    } else if (player === 'player2') {
      winner = username2;
    } else {
      winner = 'Tied';
    }
    this.setState({
      [player]: this.state[player] + 1,
      winner: winner,
    })
  }

  handleName = (player1, player2) => {
    this.setState({
      username1: player1,
      username2: player2,
      showLogin: false,
    })
  }

  handleEndgame = (input) => {
    this.setState({ showEndgame: input });
  }

  handleToggle = (event) => {
    this.setState({font: (this.state.font === 'cross') ? 'img' : 'cross'});
  }

  handleSize = (event) => {
    this.setState({size: Number(event.target.value)});
  }

  handleTheme = (isLight) => {
    this.setState({
      isLight: !this.state.isLight,
    })
  }

  render() { 
    const {
      ties, 
      player1,
      player2,
      showLogin,
      username1,
      username2,
      showEndgame,
      winner,
      isLight,
      size,
      font
    } = this.state;
    console.log(size)
    return ( 
      <div className={isLight ? 'App light-theme' : 'App dark-theme'}>
        {showEndgame ? (
          <Endgame winner={winner} endgame={this.handleEndgame} theme={isLight} />
        ) : null}
        {showLogin ? <Login names={this.handleName} theme={isLight} /> : null}
        <Navbar 
          ties={ties}
          username1={username1}
          username2={username2}
          player1={player1}
          player2={player2}
          handleTheme={this.handleTheme}
          theme={isLight} 
          handleToggle={this.handleToggle}
          handleSize={this.handleSize}
          font={font}
        />
        <Game 
          username1={username1}
          username2={username2}
          endgame={this.handleEndgame}
          handleScore={this.handleScore}
          theme={isLight} 
          size={size}
          font={font}
        />
        <Footer theme={isLight} />
    </div>
     );
  }
}
 
export default App;