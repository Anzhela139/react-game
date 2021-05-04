import React from 'react'
import Navbar from './components/Navbar'
import Game from './components/Game1'
import Menu from './components/Menu'
import Login from './components/Login'
import Footer from './components/Footer'
import SvgBG from './components/SvgBG'
import { get, set } from './utils'
import './App.css'

const SizeContext = React.createContext({})
const SizeProvider = SizeContext.Provider
const SizeConsumer = SizeContext.Consumer

const FontContext = React.createContext({
  font: 'cross',
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ties: get('ties_24056') || 0,
      username1: get('player1_23096') || 'Player1',
      username2: get('player2_28096') || 'Player2',
      isNew: false,
      player1: 0,
      player2: 0,
      showMenu: true,
      showLogin: false,
      isLight: true,
      size: 3,
      sound: false,
      font: 'cross',
      solution: false,
    }
  }

  handleScore = (player) => {
    const { username1, username2 } = this.state
    if (player === 'player1') {
      this.setState({
        [player]: this.state[player] + 1,
      })
    } else if (player === 'player2') {
      this.setState({
        [player]: this.state[player] + 1,
      })
    } else {
      this.setState({
        ties: this.state.ties + 1,
      })
      set('ties_24056', this.state.ties + 1)
    }
  }

  handleName = (player1, player2) => {
    this.setState({
      username1: player1,
      username2: player2,
    })
  }

  handleMenu = (event) => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  handleLogin = (event) => {
    this.setState({
      showLogin: !this.state.showLogin,
    })
  }

  handleToggle = (event) => {
    this.setState({ font: this.state.font === 'cross' ? 'img' : 'cross' })
  }

  handleSolution = () => {
    this.setState({
      solution: !this.state.solution,
    })
  }

  handleSize = (event) => {
    if (event.target) {
      this.setState({ size: Number(event.target.value) })
    } else {
      this.setState({ size: event })
    }
  }

  handleTheme = (isLight) => {
    this.setState({
      isLight: !this.state.isLight,
    })
  }

  handleNewGame = () => {
    this.setState({
      isNew: !this.state.isNew,
    })
  }

  handleWinner = (value) => {
    if (value === 'X') {
      this.setState({
        player1: this.state.player1 + 1,
      })
    } else {
      this.setState({
        player2: this.state.player2 + 1,
      })
    }
  }

  handleKeys = () => {}

  componentDidMount = () => {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyM') {
        event.stopImmediatePropagation()
        this.handleMenu('work')
      } else if (event.code === 'Digit3') {
        this.handleSize(3)
      } else if (event.code === 'Digit4') {
        this.handleSize(4)
      } else if (event.code === 'Digit5') {
        this.handleSize(5)
      } else if (event.code === 'Digit6') {
        this.handleSize(6)
      } else if (event.code === 'KeyC') {
        event.stopImmediatePropagation()
        this.handleToggle('work')
      } else if (event.code === 'KeyT') {
        event.stopImmediatePropagation()
        this.handleTheme('work')
      }
    })
  }
  componentWillUnmount = () => {
    document.addEventListener('keydown', (event) => {
      console.log(event)
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
      isNew,
      isLight,
      size,
      sound,
      font,
      solution,
    } = this.state
    const { theme } = this.props
    return (
      <SizeContext.Provider value={size}>
        <div className={isLight ? 'App light-theme' : 'App dark-theme'}>
          <div className="svg_background">
            <SvgBG />
          </div>
          {showLogin ? <Login names={this.handleName} handleLogin={this.handleLogin} /> : null}
          {showMenu ? (
            <Menu
              showItself={this.state.showMenu}
              handleLogin={this.handleLogin}
              handleMenu={this.handleMenu}
              handleName={this.handleName}
              handleToggle={this.handleToggle}
              handleSize={this.handleSize}
              handleTheme={this.handleTheme}
              handleNewGame={this.handleNewGame}
              handleSolution={this.handleSolution}
              username1={username1}
              username2={username2}
              size={size}
              sound={sound}
              font={font}
            />
          ) : null}
          <Navbar
            ties={ties}
            username1={username1}
            username2={username2}
            player1={player1}
            player2={player2}
            handleMenu={this.handleMenu}
          />
          <Game
            username1={username1}
            username2={username2}
            handleScore={this.handleScore}
            size={size}
            font={font}
            solution={solution}
            handleWinner={this.handleWinner}
            isNew={isNew}
          />
          <Footer theme={isLight} />
        </div>
      </SizeContext.Provider>
    )
  }
}

export { App, SizeConsumer }
