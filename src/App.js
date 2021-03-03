import React from 'react';
import Navbar from './components/Navbar';
import Game from "./components/Game";
import Menu from './components/Menu';
import Login from "./components/Login";
import Endgame from "./components/Endgame";
import Footer from './components/Footer';
import { get, set } from './utils';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ties: get('ties_24056') || 0,
      username1: get('player1_23096') || 'Player1',
      username2: get('player2_28096') || 'Player2',
      winner: '',
      player1: 0,
      player2: 0,
      showMenu: true,
      showLogin: false,
      showEndgame: false,
      isLight: true,
      size: 3,
      sound: false,
      font: 'cross',
      solution: false,
    };
  }

  handleScore = (player) => {
    const { username1, username2 } = this.state;
    let winner;
    if (player === 'player1') {
      winner = username1;
      this.setState({
        [player]: this.state[player] + 1,
      })
    } else if (player === 'player2') {
      winner = username2;
      this.setState({
        [player]: this.state[player] + 1,
      })
    } else {
      winner = 'Tied';
      this.setState({
        ties: this.state.ties + 1,
      })
      set('ties_24056', this.state.ties + 1);
    }
    this.setState({
      winner: winner,
    })
  }

  handleName = (player1, player2) => {
    this.setState({
      username1: player1,
      username2: player2,
    })
  }

  handleMenu = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({
      showLogin: !this.state.showLogin,
    })
  }

  handleEndgame = (input) => {
    this.setState({ showEndgame: input });
  }

  handleToggle = (event) => {
    this.setState({font: (this.state.font === 'cross') ? 'img' : 'cross'});
  }

  handleSolution = () => {
    this.setState({
      solution: !this.state.solution,
    })
  }

  handleSize = (event) => {
    if (event.target) {
      this.setState({size: Number(event.target.value)});
    } else {
      this.setState({size: event});
    }
  }

  handleTheme = (isLight) => {
    this.setState({
      isLight: !this.state.isLight,
    })
  }

  handleKey = () => {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
  
      if (event.code === 'KeyM') {
        this.handleMenu();
      } else if (event.code === 'Digit3') {
        this.handleSize(3);
      } else if (event.code === 'Digit4') {
        this.handleSize(4);
      } else if (event.code === 'Digit5') {
        this.handleSize(5);
      } else if (event.code === 'Digit6') {
        this.handleSize(6);
      } else if (event.code === 'KeyC') {
        this.handleToggle('work');
      } 
      
    })
  }

  render() { 
    const {
      ties, 
      player1,
      player2,
      showLogin,
      showMenu,
      username1,
      username2,
      showEndgame,
      winner,
      isLight,
      size,
      sound,
      font,
      solution
    } = this.state;
    console.log(showLogin)
    this.handleKey();
    return ( 
      <div className={isLight ? 'App light-theme' : 'App dark-theme'}>
        {showEndgame ? (
          <Endgame winner={winner} endgame={this.handleEndgame} theme={isLight} />
        ) : null}
        {showLogin ? <Login names={this.handleName} handleLogin={this.handleLogin} theme={isLight} /> : null}
        {showMenu ? <Menu showItself={this.state.showMenu} handleLogin={this.handleLogin} handleMenu={this.handleMenu} theme={isLight} handleName={this.handleName} handleToggle={this.handleToggle} handleSize={this.handleSize} username1={username1} username2={username2} size={size} sound={sound} font={font} /> : null}
        <Navbar 
          ties={ties}
          username1={username1}
          username2={username2}
          player1={player1}
          player2={player2}
          handleTheme={this.handleTheme}
          theme={isLight} 
          handleMenu={this.handleMenu}
          handleToggle={this.handleToggle}
          handleSize={this.handleSize}
          font={font}
          handleSolution={this.handleSolution}
        />
        <Game 
          username1={username1}
          username2={username2}
          endgame={this.handleEndgame}
          handleScore={this.handleScore}
          theme={isLight} 
          size={size}
          font={font}
          solution={solution}
        />
        <Footer theme={isLight} />
    </div>
     );
  }
}
 
export default App;